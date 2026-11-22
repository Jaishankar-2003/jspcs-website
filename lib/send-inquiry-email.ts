/**
 * Utility for dispatching inquiry emails via the JSPCS API route and generating client-side fallback mailto / webmail links.
 */

export interface InquiryEmailPayload {
  formType: string
  name: string
  phone: string
  email?: string
  subject: string
  message?: string
  details?: Record<string, string | number | boolean | undefined | null>
}

const TARGET_EMAIL = 'jaishankarpcservices2021@gmail.com'

/**
 * Send an email directly via the backend API route using Nodemailer & Gmail SMTP
 */
export async function sendInquiryEmail(payload: InquiryEmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'Server error while sending email' }
    }
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error' }
  }
}

/**
 * Format plain text representation for mailto: or webmail compose
 */
export function formatEmailBody(payload: InquiryEmailPayload): string {
  const lines: string[] = [
    `JSPCS ${payload.formType.toUpperCase()}`,
    '========================================',
    `Client Name: ${payload.name || 'Not provided'}`,
    `Phone / WhatsApp: ${payload.phone || 'Not provided'}`,
  ]

  if (payload.email) {
    lines.push(`Email Address: ${payload.email}`)
  }

  if (payload.message) {
    lines.push('', '--- Message / Hardware Requirements ---', payload.message)
  }

  if (payload.details && Object.keys(payload.details).length > 0) {
    lines.push('', '--- Details & Specifications ---')
    for (const [key, val] of Object.entries(payload.details)) {
      if (val !== undefined && val !== null && val !== '') {
        lines.push(`• ${key}: ${val}`)
      }
    }
  }

  lines.push('', '--- Sent from jspcs.online ---')
  return lines.join('\n')
}

/**
 * Creates a standard mailto: link for desktop & mobile mail applications
 */
export function generateMailtoLink(payload: InquiryEmailPayload): string {
  const subject = encodeURIComponent(`[JSPCS Inquiry] ${payload.subject}`)
  const body = encodeURIComponent(formatEmailBody(payload))
  return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`
}

/**
 * Creates a direct Google Mail compose URL (great for desktop browsers)
 */
export function generateGmailWebLink(payload: InquiryEmailPayload): string {
  const subject = encodeURIComponent(`[JSPCS Inquiry] ${payload.subject}`)
  const body = encodeURIComponent(formatEmailBody(payload))
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${subject}&body=${body}`
}
