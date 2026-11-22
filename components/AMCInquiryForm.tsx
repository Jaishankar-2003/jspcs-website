'use client'

import { useState } from 'react'
import { Send, Mail, MessageCircle, Check } from 'lucide-react'
import { AMC_PLANS } from '@/lib/amc-data'
import { waLink } from '@/lib/site-config'
import { sendInquiryEmail } from '@/lib/send-inquiry-email'

const NEEDS = ['Desktops / laptops', 'Printers', 'Network / Wi-Fi', 'Backup', 'Security', 'On-site visits', 'Remote support']

const input =
  'w-full min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-white text-base text-graphite-900 placeholder:text-warmgrey-300 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500'
const label = 'block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5'

export default function AMCInquiryForm() {
  const [form, setForm] = useState({ name: '', org: '', phone: '', plan: 'Not sure – please suggest', systems: '', location: 'Madurai', message: '' })
  const [needs, setNeeds] = useState<string[]>([])
  const [emailSending, setEmailSending] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submitWhatsApp = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault()
    if (!form.name.trim()) {
      alert('Please enter your name.')
      return
    }
    if (!form.phone.trim()) {
      alert('Please enter your phone number.')
      return
    }

    const lines = [
      'Hi JSPCS, I am interested in AMC support for my systems/business. Please share the available plans.',
      '',
      `Name: ${form.name}`,
      form.org && `Business / organisation: ${form.org}`,
      `Phone: ${form.phone}`,
      `Plan: ${form.plan}`,
      form.systems && `Number of systems: ${form.systems}`,
      form.location && `Location: ${form.location}`,
      needs.length ? `Need help with: ${needs.join(', ')}` : '',
      form.message && `\nDetails: ${form.message}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const submitEmail = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault()
    if (!form.name.trim()) {
      alert('Please enter your name.')
      return
    }
    if (!form.phone.trim()) {
      alert('Please enter your phone number.')
      return
    }

    setEmailSending(true)
    setEmailError(null)

    const payload = {
      formType: 'Annual Maintenance Contract (AMC) Request',
      name: form.name.trim(),
      phone: form.phone.trim(),
      subject: `AMC Quote Request: ${form.org || form.name} (${form.plan})`,
      message: form.message.trim(),
      details: {
        'Business / Organization': form.org || 'Not provided (Home setup)',
        'Preferred Plan': form.plan,
        'Number of Systems': form.systems || 'Not specified',
        'Service Location': form.location || 'Madurai',
        'Services Required': needs.length > 0 ? needs.join(', ') : 'Complete IT Support',
      },
    }

    const res = await sendInquiryEmail(payload)
    setEmailSending(false)

    if (res.success) {
      setEmailSuccess(true)
      setEmailError(null)
    } else {
      setEmailError(res.error || 'Unable to deliver AMC inquiry via email right now. Please try again or connect via WhatsApp.')
    }
  }

  return (
    <form onSubmit={submitWhatsApp} className="rounded-3xl bg-white border border-ivory-200 shadow-atelier p-4 sm:p-8 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-graphite-900">Request an AMC quote</h3>
        <p className="text-sm text-warmgrey-500">Tell us about your setup. Connect with us via Official Email or WhatsApp.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className={label}>Your name *</span>
          <input required value={form.name} onChange={set('name')} className={input} autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>Phone / WhatsApp *</span>
          <input required type="tel" value={form.phone} onChange={set('phone')} className={input} autoComplete="tel" inputMode="tel" />
        </label>
        <label className="block">
          <span className={label}>Business / organisation</span>
          <input value={form.org} onChange={set('org')} className={input} placeholder="Optional for home users" autoComplete="organization" />
        </label>
        <label className="block">
          <span className={label}>Number of systems</span>
          <input value={form.systems} onChange={set('systems')} className={input} inputMode="numeric" placeholder="e.g. 8" />
        </label>
        <label className="block">
          <span className={label}>Plan</span>
          <select value={form.plan} onChange={set('plan')} className={input}>
            <option>Not sure – please suggest</option>
            {AMC_PLANS.map(p => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>Location</span>
          <input value={form.location} onChange={set('location')} className={input} />
        </label>
      </div>
      <fieldset>
        <legend className={label}>What do you need help with?</legend>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map(n => {
            const active = needs.includes(n)
            return (
              <button
                type="button"
                key={n}
                aria-pressed={active}
                onClick={() => setNeeds(p => (active ? p.filter(x => x !== n) : [...p, n]))}
                className={`min-h-[40px] px-3 rounded-xl border text-[13px] font-semibold transition-colors ${
                  active ? 'bg-graphite-900 text-white border-graphite-900' : 'bg-ivory-50 text-graphite-800 border-ivory-300'
                }`}
              >
                {n}
              </button>
            )
          })}
        </div>
      </fieldset>
      <label className="block">
        <span className={label}>Anything else?</span>
        <textarea value={form.message} onChange={set('message')} rows={3} className={`${input} py-3 resize-none`} placeholder="Common problems, software you use, timings…" />
      </label>

      {/* Dual Responsive Action Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col md:flex-row gap-3">
          {/* WhatsApp Button: Higher priority on mobile (order-1), secondary companion on desktop (md:order-2) */}
          <button
            type="button"
            onClick={submitWhatsApp}
            className="order-1 md:order-2 flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Send AMC on WhatsApp</span>
          </button>

          {/* Email Button: Higher priority on Laptop & Monitor (md:order-1), primary signature styling */}
          <button
            type="button"
            disabled={emailSending}
            onClick={submitEmail}
            className={`order-2 md:order-1 flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-5 rounded-xl font-bold text-sm transition-all text-center active:scale-[0.99] ${
              emailSending
                ? 'bg-warmgrey-400 text-white cursor-wait'
                : 'bg-burnt-500 hover:bg-burnt-600 text-white shadow-md shadow-burnt-500/25 md:ring-2 md:ring-burnt-500/30'
            }`}
          >
            {emailSending ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                <span>Sending AMC Email...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 shrink-0" />
                <span>Send AMC via Official Email</span>
              </>
            )}
          </button>
        </div>

        {/* Email Success Feedback Banner */}
        {emailSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
            <div>
              <p className="font-bold text-emerald-800">AMC Request Emailed Successfully!</p>
              <p className="text-emerald-700 text-xs mt-0.5">
                Our IT maintenance coordinator will review your systems and reply to {form.phone} promptly.
              </p>
            </div>
          </div>
        )}

        {/* Error Fallback */}
        {emailError && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs font-medium flex items-center justify-between gap-2 animate-fadeIn">
            <span>{emailError}</span>
            <button
              type="button"
              onClick={submitEmail}
              className="underline font-bold text-rose-700 hover:text-rose-900 shrink-0"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </form>
  )
}
