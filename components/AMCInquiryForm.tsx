'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { AMC_PLANS } from '@/lib/amc-data'
import { waLink } from '@/lib/site-config'

const NEEDS = ['Desktops / laptops', 'Printers', 'Network / Wi-Fi', 'Backup', 'Security', 'On-site visits', 'Remote support']

const input =
  'w-full min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-white text-base text-graphite-900 placeholder:text-warmgrey-300 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500'
const label = 'block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5'

export default function AMCInquiryForm() {
  const [form, setForm] = useState({ name: '', org: '', phone: '', plan: 'Not sure – please suggest', systems: '', location: 'Madurai', message: '' })
  const [needs, setNeeds] = useState<string[]>([])

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
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

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white border border-ivory-200 shadow-atelier p-4 sm:p-8 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-graphite-900">Request an AMC quote</h3>
        <p className="text-sm text-warmgrey-500">Tell us about your setup. We reply on WhatsApp with a plan that fits.</p>
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
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-bold text-sm">
        <Send className="w-4 h-4" /> Send AMC Inquiry on WhatsApp
      </button>
    </form>
  )
}
