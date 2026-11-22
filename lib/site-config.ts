/**
 * JSPCS – single source of truth for contact details, WhatsApp messages
 * and which business claims are allowed to appear on the site.
 */

export const CONTACT = {
  phone: '9842139997',
  phoneDisplay: '98421 39997',
  phoneIntl: '+91 98421 39997',
  tel: 'tel:9842139997',
  waNumber: '919842139997',
  email: 'jaishankarpcservices2021@gmail.com',
  mapsUrl: 'https://maps.google.com/?q=JAI+SHANKAR+PC+SERVICES+Madurai',
  msmeVerifyUrl:
    'https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=j50RCd7n0wmncFGccmyrD8D3NynSpw2QZsbSnDiEPCM=',
  hours: 'Mon – Sat: 9:30 AM – 9:00 PM',
} as const

/** Contextual WhatsApp messages (plain text – encoded by waLink). */
export const WA_MESSAGES = {
  general: 'Hi JSPCS, I would like to know more about your services.',
  service:
    'Hi JSPCS, I need help with my laptop/desktop. Can I share my problem and get a service estimate?',
  build: 'Hi JSPCS, I am planning a custom PC build. My purpose and budget are...',
  amc: 'Hi JSPCS, I am interested in AMC support for my systems/business. Please share the available plans.',
  chip: 'Hi JSPCS, I have a motherboard/laptop hardware issue and would like to enquire about diagnosis.',
  upgrade:
    'Hi JSPCS, I want to upgrade my PC/laptop (RAM/SSD/GPU). Can you suggest what will help the most?',
  itSupport:
    'Hi JSPCS, I need help with networking / printer / IT support. Can you assist?',
} as const

export type WaTopic = keyof typeof WA_MESSAGES

export function waLink(message: string = WA_MESSAGES.general): string {
  return `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(message)}`
}

export function waTopic(topic: WaTopic): string {
  return waLink(WA_MESSAGES[topic])
}

/**
 * Claim gate. Anything set to `false` is an existing claim that could not be
 * verified during the upgrade audit – it stays hidden until the business owner
 * confirms it. Flip to `true` once confirmed.
 */
export const VERIFIED_CLAIMS = {
  /** "10+ years", "4,500+ repairs", "850+ rigs", "4.9★ / 500+ reviews" */
  numericStats: false,
  /** Existing customer testimonials (names + locations) already on the site */
  testimonials: true,
  /** Government MSME (Udyam) registration – has public verification link */
  msme: true,
} as const
