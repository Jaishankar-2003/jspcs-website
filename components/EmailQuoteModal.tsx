'use client'

import React, { useState, useEffect } from 'react'
import { X, Mail, Phone, User, Send, CheckCircle2, AlertCircle, ShieldCheck, FileText } from 'lucide-react'
import { sendInquiryEmail, generateMailtoLink } from '@/lib/send-inquiry-email'

export interface EmailQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  category?: string
  initialName?: string
  initialPhone?: string
  initialEmail?: string
  quoteDetails?: Record<string, string | number | boolean | undefined | null>
  message?: string
  onSuccess?: () => void
}

export default function EmailQuoteModal({
  isOpen,
  onClose,
  title,
  category = 'Service & Hardware Quote',
  initialName = '',
  initialPhone = '',
  initialEmail = '',
  quoteDetails = {},
  message = '',
  onSuccess,
}: EmailQuoteModalProps) {
  const [name, setName] = useState(initialName)
  const [phone, setPhone] = useState(initialPhone)
  const [email, setEmail] = useState(initialEmail)
  const [notes, setNotes] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      setName(initialName || '')
      setPhone(initialPhone || '')
      setEmail(initialEmail || '')
      setNotes('')
      setSending(false)
      setSent(false)
      setError(null)
    }
  }, [isOpen, initialName, initialPhone, initialEmail])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Please provide your name.')
      return
    }
    if (!phone.trim()) {
      setError('Please provide your phone or WhatsApp number.')
      return
    }

    setSending(true)
    setError(null)

    const payload = {
      formType: `${category}: ${title}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      subject: `Quote Request: ${title} - ${name.trim()} (${phone.trim()})`,
      message: [message, notes.trim()].filter(Boolean).join('\n\nCustomer Note:\n'),
      details: {
        'Inquiry Target': title,
        'Category': category,
        'Customer Phone': phone.trim(),
        'Customer Email': email.trim() || 'Not provided',
        ...quoteDetails,
        ...(notes.trim() ? { 'Customer Request Note': notes.trim() } : {}),
      },
    }

    const res = await sendInquiryEmail(payload)
    setSending(false)

    if (res.success) {
      setSent(true)
      if (onSuccess) onSuccess()
    } else {
      setError(res.error || 'Server dispatch issue. Opening direct mail fallback...')
      window.open(generateMailtoLink(payload), '_blank')
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-quote-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-graphite-950/80 backdrop-blur-md overflow-y-auto"
      onClick={e => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#EAE6DC] shadow-2xl p-5 sm:p-8 my-auto text-graphite-900 transition-all max-h-[92vh] flex flex-col justify-between overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory-100 hover:bg-ivory-200 text-graphite-600 hover:text-graphite-900 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          /* Success Screen */
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                DISPATCH SUCCESSFUL
              </span>
              <h3 className="text-2xl font-black text-graphite-900">
                Quote Request Emailed!
              </h3>
              <p className="text-sm text-graphite-600 max-w-md mx-auto leading-relaxed pt-1">
                Thank you, <strong>{name}</strong>. Our senior technician has received your inquiry for <strong>{title}</strong> at <code className="text-burnt-600 font-mono text-xs">jaishankarpcservices2021@gmail.com</code>.
              </p>
              <p className="text-xs text-warmgrey-500 pt-1">
                We will review your requirements and reach out to you at <strong className="text-graphite-900">{phone}</strong> shortly.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 px-6 rounded-2xl bg-graphite-900 hover:bg-graphite-800 text-white font-bold text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Header */}
            <div className="pr-8 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burnt-500 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-burnt-600">
                  {category}
                </span>
              </div>
              <h3 id="email-quote-title" className="text-xl sm:text-2xl font-black text-graphite-900 tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-graphite-600">
                Enter your contact info so our team can prepare an itemized quote and reply to you.
              </p>
            </div>

            {/* Itemized Context Pill */}
            {quoteDetails && Object.keys(quoteDetails).length > 0 && (
              <div className="p-3.5 rounded-2xl bg-ivory-100/90 border border-ivory-200/80 text-xs text-graphite-800 space-y-1.5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-warmgrey-500 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-burnt-500" />
                  <span>Configured Quote Scope</span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-0.5">
                  {Object.entries(quoteDetails).slice(0, 4).map(([k, v]) => (
                    <div key={k} className="truncate">
                      <span className="text-warmgrey-500 font-medium">{k}: </span>
                      <strong className="text-graphite-900">{String(v || 'Standard')}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inputs */}
            <div className="space-y-3.5 pt-1">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-warmgrey-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Shankar Narayanan"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ivory-300 bg-white text-sm text-graphite-900 placeholder:text-warmgrey-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-[#25D366] absolute left-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. 98421 39997"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ivory-300 bg-white text-sm text-graphite-900 placeholder:text-warmgrey-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm"
                  />
                </div>
                <p className="text-[11px] text-warmgrey-500 mt-1">
                  We will call or WhatsApp you with the itemized quote.
                </p>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1">
                  Email Address <span className="text-warmgrey-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-warmgrey-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. shankar@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ivory-300 bg-white text-sm text-graphite-900 placeholder:text-warmgrey-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Special Note / Request */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1">
                  Additional Note / Requirements <span className="text-warmgrey-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="e.g. Need GST invoice, prefer doorstep pickup, or best time to call..."
                  className="w-full px-3.5 py-2 rounded-xl border border-ivory-300 bg-white text-xs text-graphite-900 placeholder:text-warmgrey-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm resize-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit CTA */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3.5 px-6 rounded-2xl text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] ${
                  sending
                    ? 'bg-warmgrey-400 cursor-wait shadow-none'
                    : 'bg-gradient-to-r from-[#FF6B35] to-[#F2542D] hover:from-[#f05a22] hover:to-[#df4620] shadow-orange-500/25 ring-2 ring-burnt-500/20'
                }`}
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                    <span>Sending Quote Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Confirm & Send Email Quote</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-warmgrey-500 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Your contact details are strictly kept private for quote dispatch.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
