import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const SMTP_USER = process.env.SMTP_USER || 'jaishankarpcservices2021@gmail.com'
const SMTP_PASS = process.env.SMTP_PASS || 'dnvpkbklueyvulzy'
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'jaishankarpcservices2021@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      formType = 'Website Inquiry',
      name = 'Anonymous Customer',
      phone = 'Not provided',
      email = '',
      subject = `New ${formType} from ${name}`,
      message = '',
      details = {},
    } = body

    // Create Nodemailer Transporter using Gmail SMTP (SSL on port 465)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS.replace(/\s+/g, ''), // Strip any accidental spaces
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Build details table rows
    const detailRows = Object.entries(details)
      .map(
        ([key, val]) => `
        <tr style="border-bottom: 1px solid #EAE6DC;">
          <td style="padding: 10px 14px; font-weight: 600; color: #171918; width: 35%; background: #FAF9F6; font-size: 13px;">${key}</td>
          <td style="padding: 10px 14px; color: #2D312E; font-size: 13px;">${String(val || 'N/A')}</td>
        </tr>`
      )
      .join('')

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
        <!-- Header -->
        <div style="background: #171918; padding: 24px 28px; border-bottom: 3px solid #FF6B35;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span style="font-size: 11px; font-weight: bold; letter-spacing: 2px; color: #FF6B35; text-transform: uppercase;">JSPCS WEB PORTAL</span>
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
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #E65100; text-transform: uppercase; letter-spacing: 1px;">Primary Customer Contact</p>
            <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px; color: #171918;">
              <div><strong>Name:</strong> ${name}</div>
              <div><strong>Phone:</strong> <a href="tel:${phone.replace(/\D/g, '')}" style="color: #FF6B35; text-decoration: none; font-weight: bold;">${phone}</a></div>
              ${email ? `<div><strong>Email:</strong> <a href="mailto:${email}" style="color: #FF6B35; text-decoration: none;">${email}</a></div>` : ''}
            </div>
          </div>

          <!-- Message -->
          ${
            message
              ? `<div style="margin-bottom: 20px;">
                  <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #4A5568;">Message / Hardware Requirements</h4>
                  <div style="background: #F8F9FA; border-left: 4px solid #FF6B35; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: #2D3748; line-height: 1.6; white-space: pre-wrap;">${message}</div>
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
            <a href="https://wa.me/91${phone.replace(/\D/g, '')}" style="display: inline-block; background: #25D366; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
              Reply on WhatsApp
            </a>
            <a href="tel:${phone.replace(/\D/g, '')}" style="display: inline-block; background: #171918; color: white; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
              Call Customer (${phone})
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #F7FAFC; padding: 14px 28px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #718096; text-align: center;">
          Sent from JSPCS Online (<a href="https://jspcs.online" style="color: #FF6B35; text-decoration: none;">https://jspcs.online</a>) • Direct Engineering Desk
        </div>
      </div>
    `

    const plainText = `
${formType.toUpperCase()} - JSPCS ONLINE
----------------------------------------
Customer Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Subject: ${subject}

Message / Hardware Request:
${message || 'None provided'}

Breakdown:
${Object.entries(details)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n')}

Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    const mailOptions = {
      from: `"JSPCS Web Portal" <${SMTP_USER}>`,
      to: NOTIFICATION_EMAIL,
      replyTo: email || undefined,
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
    console.error('Error sending email:', err)
    return NextResponse.json(
      {
        success: false,
        error: err?.message || 'Failed to send email via SMTP',
      },
      { status: 500 }
    )
  }
}
