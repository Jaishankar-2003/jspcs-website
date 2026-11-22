import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    // 1. Read email configuration safely from environment variables inside the handler
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10)
    const smtpSecure = process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '')
    const notificationEmail = process.env.NOTIFICATION_EMAIL?.trim() || smtpUser

    // 2. Validate required SMTP credentials
    if (!smtpUser || !smtpPass) {
      console.error('[send-email] SMTP configuration missing: SMTP_USER or SMTP_PASS is not configured.')
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is temporarily unavailable. Please reach our engineering desk via WhatsApp or call 9842139997.',
        },
        { status: 503 }
      )
    }

    // 3. Parse and validate incoming payload
    const body = await req.json().catch(() => ({}))
    const {
      formType = 'Website Inquiry',
      name = '',
      phone = '',
      email = '',
      subject = `New ${formType} from ${name || 'Customer'}`,
      message = '',
      details = {},
    } = body

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Customer name is required.' },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Contact phone number is required.' },
        { status: 400 }
      )
    }

    // 4. Create Nodemailer Transporter using Gmail SMTP (SSL on port 465)
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // 5. Build details table rows
    const detailRows = Object.entries(details)
      .filter(([_, val]) => val !== undefined && val !== null && val !== '')
      .map(
        ([key, val]) => `
        <tr style="border-bottom: 1px solid #EAE6DC;">
          <td style="padding: 10px 14px; font-weight: 600; color: #171918; width: 35%; background: #FAF9F6; font-size: 13px;">${key}</td>
          <td style="padding: 10px 14px; color: #2D312E; font-size: 13px;">${String(val)}</td>
        </tr>`
      )
      .join('')

    const cleanPhone = phone.replace(/\D/g, '')

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <!-- Header -->
        <div style="background: #171918; padding: 24px 28px; border-bottom: 3px solid #E66A35;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 11px; font-weight: bold; letter-spacing: 2px; color: #E66A35; text-transform: uppercase;">JSPCS WEB PORTAL</span>
              <h2 style="margin: 4px 0 0 0; color: #ffffff; font-size: 20px; font-weight: 800;">${formType}</h2>
            </div>
            <div style="text-align: right;">
              <span style="background: rgba(255,255,255,0.1); color: #F5F3EE; font-size: 11px; padding: 4px 10px; border-radius: 6px; font-family: monospace;">madurai • tn</span>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div style="padding: 24px 28px;">
          <!-- Quick Contact Pill -->
          <div style="background: #FFF5EE; border: 1px solid #FFE4D6; border-radius: 12px; padding: 14px 18px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #CF5522; text-transform: uppercase; letter-spacing: 1px;">Primary Customer Contact</p>
            <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px; color: #171918;">
              <div><strong>Name:</strong> ${name.trim()}</div>
              <div><strong>Phone:</strong> <a href="tel:${cleanPhone}" style="color: #E66A35; text-decoration: none; font-weight: bold;">${phone.trim()}</a></div>
              ${email ? `<div><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #E66A35; text-decoration: none;">${email.trim()}</a></div>` : ''}
            </div>
          </div>

          <!-- Message -->
          ${
            message
              ? `<div style="margin-bottom: 20px;">
                  <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #4A5568;">Message / Hardware Requirements</h4>
                  <div style="background: #F8F9FA; border-left: 4px solid #E66A35; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: #2D3748; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</div>
                </div>`
              : ''
          }

          <!-- Specification / Form Data Details -->
          ${
            detailRows
              ? `<div style="margin-bottom: 20px;">
                  <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #4A5568;">Inquiry Specification Breakdown</h4>
                  <table style="width: 100%; border-collapse: collapse; border: 1px solid #EAE6DC; border-radius: 8px; overflow: hidden;">
                    <tbody>
                      ${detailRows}
                    </tbody>
                  </table>
                </div>`
              : ''
          }

          <!-- Action buttons for the business owner -->
          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #EDF2F7; display: flex; gap: 10px;">
            ${cleanPhone ? `
              <a href="https://wa.me/91${cleanPhone}" style="display: inline-block; background: #25D366; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
                Reply on WhatsApp
              </a>
              <a href="tel:${cleanPhone}" style="display: inline-block; background: #171918; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
                Call Customer (${phone.trim()})
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #F7FAFC; padding: 14px 28px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #718096; text-align: center;">
          Sent from JSPCS Online (<a href="https://jspcs.online" style="color: #E66A35; text-decoration: none;">https://jspcs.online</a>) • Direct Engineering Desk
        </div>
      </div>
    `

    const plainText = `
${formType.toUpperCase()} - JSPCS ONLINE
----------------------------------------
Customer Name: ${name.trim()}
Phone: ${phone.trim()}
Email: ${email.trim() || 'Not provided'}
Subject: ${subject}

Message / Hardware Request:
${message.trim() || 'None provided'}

Breakdown:
${Object.entries(details)
  .filter(([_, v]) => v !== undefined && v !== null && v !== '')
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n')}

Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    const mailOptions = {
      from: `"JSPCS Web Portal" <${smtpUser}>`,
      to: notificationEmail,
      replyTo: email.trim() || undefined,
      subject: `[JSPCS Inquiry] ${subject}`,
      text: plainText,
      html: htmlContent,
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: 'Inquiry email sent successfully!',
    })
  } catch (err: any) {
    // Log detailed error on server console, never expose SMTP password/stack trace to client
    console.error('[send-email] SMTP dispatch error:', err?.message || err)
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to dispatch inquiry email at this moment. Please reach our team via WhatsApp or call 9842139997.',
      },
      { status: 500 }
    )
  }
}
