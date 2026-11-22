/**
 * Utility for dispatching inquiry emails via the JSPCS API route.
 * Replaces direct mailto/Gmail fallback popups with robust server-side processing.
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

export interface SendInquiryResult {
  success: boolean
  error?: string
  messageId?: string
}

/**
 * Send an email directly via the backend API route using Nodemailer & Gmail SMTP.
 * All credentials remain securely on the server-side.
 */
export async function sendInquiryEmail(
  payload: InquiryEmailPayload,
  timeoutMs = 12000
): Promise<SendInquiryResult> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    const data = await res.json().catch(() => ({}))

    if (!res.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Server encountered an issue sending the email inquiry.',
      }
    }

    return {
      success: true,
      messageId: data.messageId,
    }
  } catch (err: any) {
    clearTimeout(timeoutId)
    if (err?.name === 'AbortError') {
      return {
        success: false,
        error: 'Email request timed out. Please check your network or connect via WhatsApp.',
      }
    }
    return {
      success: false,
      error: err?.message || 'Network connection issue while communicating with server.',
    }
  }
}
