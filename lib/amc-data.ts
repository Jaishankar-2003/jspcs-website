/**
 * AMC plan content. No prices, guarantees or fixed SLAs are invented here –
 * terms are agreed per customer. Existing indicative pricing lives on the
 * /computer-amc-service-madurai page and must be confirmed by the owner.
 */

export interface AmcPlan {
  id: string
  letter: string
  name: string
  tagline: string
  forWho: string[]
  coverage: string[]
  highlight?: boolean
}

export const AMC_PLANS: AmcPlan[] = [
  {
    id: 'home',
    letter: 'A',
    name: 'Home PC Care',
    tagline: 'For home users, students and family computers.',
    forWho: ['Home users', 'Students', 'Personal laptops', 'Family computers'],
    coverage: [
      'Periodic PC health check',
      'Performance check & cleanup',
      'Windows / software troubleshooting',
      'Basic malware & security checks',
      'Storage health check',
      'Remote help where possible',
      'Upgrade suggestions',
      'Maintenance reminders',
    ],
  },
  {
    id: 'professional',
    letter: 'B',
    name: 'Professional PC Care',
    tagline: 'For people whose work stops when the PC stops.',
    forWho: ['Freelancers', 'Remote workers', 'Developers', 'Editors & designers'],
    coverage: [
      'Scheduled health check-ups',
      'Performance maintenance',
      'Software troubleshooting',
      'Backup review',
      'Security checks',
      'Hardware diagnostics',
      'Priority support (as per plan)',
      'Upgrade planning',
    ],
  },
  {
    id: 'small-business',
    letter: 'C',
    name: 'Small Business IT AMC',
    tagline: 'For offices, shops, clinics and institutions.',
    forWho: ['Offices & shops', 'Clinics', 'Schools & institutes', 'Local businesses'],
    coverage: [
      'Maintenance for multiple PCs',
      'Scheduled maintenance visits',
      'Desktop & laptop troubleshooting',
      'Printer support',
      'Network / Wi-Fi troubleshooting',
      'Backup & security maintenance',
      'Asset inventory & maintenance reports',
      'Remote + on-site support (as agreed)',
    ],
    highlight: true,
  },
  {
    id: 'custom',
    letter: 'D',
    name: 'Business / Custom IT Support',
    tagline: 'For growing teams that need a tailored setup.',
    forWho: ['Larger offices', 'Growing businesses', 'Multi-location teams'],
    coverage: [
      'Custom system coverage',
      'Scheduled IT maintenance',
      'User & network support',
      'Device inventory',
      'Preventive maintenance',
      'Backup planning',
      'IT health reports',
      'Custom SLA agreed in writing',
    ],
  },
]

export interface AmcRow {
  label: string
  values: [string, string, string, string]
}

/** Comparison rows. ✓ = included, — = not included, text = depends/agreed. */
export const AMC_COMPARISON: AmcRow[] = [
  { label: 'Best for', values: ['Home & students', 'Freelancers & pros', 'Offices, shops, clinics', 'Growing businesses'] },
  { label: 'Number of systems', values: ['1–2', '1–3', 'Multiple PCs', 'As required'] },
  { label: 'Maintenance frequency', values: ['Periodic', 'Scheduled', 'Scheduled visits', 'As agreed'] },
  { label: 'Support channels', values: ['Phone, WhatsApp', 'Phone, WhatsApp', 'Phone, WhatsApp, on-site', 'All channels'] },
  { label: 'Remote support', values: ['Where possible', '✓', '✓', '✓'] },
  { label: 'On-site visits', values: ['On request', 'On request', 'As per plan', 'As agreed'] },
  { label: 'Network / Wi-Fi support', values: ['Basic', 'Basic', '✓', '✓'] },
  { label: 'Printer support', values: ['—', 'Basic', '✓', '✓'] },
  { label: 'Security checks', values: ['Basic', '✓', '✓', '✓'] },
  { label: 'Backup support', values: ['Advice', 'Backup review', '✓', 'Backup planning'] },
  { label: 'Reports', values: ['—', 'On request', 'Maintenance reports', 'IT health reports'] },
  { label: 'Response target', values: ['Standard', 'Priority', 'Agreed in contract', 'Custom SLA'] },
]

export const AMC_EXCLUSIONS = [
  'Cost of replacement parts (quoted separately for your approval)',
  'Physical / liquid damage repairs (handled as a separate repair job)',
  'Software licences and subscriptions',
  'Data recovery from failed drives',
  'Systems not listed in the agreement',
]

export const AMC_ADDONS = [
  'Extra systems or devices',
  'Additional on-site visits',
  'CCTV / network expansion work',
  'Cloud backup setup (Google Workspace / Microsoft 365)',
  'New PC or laptop procurement & setup',
]

export const AMC_WORKFLOW = [
  { title: 'Tell us your setup', body: 'How many systems, what they are used for, and what usually goes wrong.' },
  { title: 'Free assessment', body: 'We check your systems and suggest the plan that actually fits.' },
  { title: 'Clear agreement', body: 'Coverage, visit schedule, response targets and exclusions in writing.' },
  { title: 'Regular maintenance', body: 'Scheduled check-ups so problems are caught before they stop work.' },
  { title: 'Support when needed', body: 'Call or WhatsApp us. Remote first, on-site when required.' },
]

export const AMC_FAQS = [
  {
    question: 'What is the difference between response time and resolution time?',
    answer:
      'Response time is how quickly we start working on your issue (a call back, remote session or visit). Resolution time is how long the fix takes – it depends on the problem and on parts availability, so we never promise a fixed resolution time.',
  },
  {
    question: 'Are spare parts included in the AMC?',
    answer:
      'Labour for covered work is part of the plan. Replacement parts are quoted separately and fitted only after your approval.',
  },
  {
    question: 'Can I get an AMC for just one laptop?',
    answer: 'Yes. Home PC Care and Professional PC Care are designed for one to a few systems.',
  },
  {
    question: 'Do you provide on-site support?',
    answer:
      'On-site visits are included based on the plan you choose. Many software issues are solved faster through remote support.',
  },
  {
    question: 'How is AMC pricing decided?',
    answer:
      'It depends on the number of systems, how they are used, the visit frequency and the support level. Share your setup and we will send a custom quote.',
  },
]
