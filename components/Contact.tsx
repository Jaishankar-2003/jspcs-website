'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Send, 
  User, 
  Paperclip, 
  ChevronDown 
} from 'lucide-react'
import { useState, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Repair / Diagnostics',
    deviceModel: '',
    message: '',
  })

  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let whatsappText = `*Direct WhatsApp Engineering Request*\n\n`
    whatsappText += `*Name:* ${formData.name}\n`
    whatsappText += `*Phone / WhatsApp:* ${formData.phone}\n`
    if (formData.email) whatsappText += `*Email:* ${formData.email}\n`
    whatsappText += `*Service Type:* ${formData.serviceType}\n`
    if (formData.deviceModel) whatsappText += `*Device / Brand & Model:* ${formData.deviceModel}\n`
    whatsappText += `*Hardware Issue / Build Requirements:*\n${formData.message}\n`
    if (files.length > 0) {
      whatsappText += `\n*Attached Photos:* ${files.length} photo(s) ready to send in chat (${files.map(f => f.name).join(', ')})`
    }

    window.open(
      `https://wa.me/919842139997?text=${encodeURIComponent(whatsappText)}`,
      '_blank'
    )
  }

  return (
    <section id="contact" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Laboratory Access & Consultations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
            Schedule a Diagnostic Bench Session
          </h2>
          <p className="text-sm sm:text-base text-warmgrey-400">
            Speak directly with a senior chip-level technician or request doorstep hardware pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Direct Technician Line */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] shadow-sm hover:border-burnt-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#FFE8DC] to-[#FFF0E6] flex items-center justify-center text-[#FF6B35] shadow-inner shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-warmgrey-400 block">
                      DIRECT TECHNICIAN LINE
                    </span>
                    <h4 className="text-sm font-bold text-graphite-900 leading-snug">
                      Call Us Directly
                    </h4>
                    <a
                      href="tel:9842139997"
                      className="text-base sm:text-lg font-black font-mono text-graphite-900 hover:text-burnt-500 transition-colors block mt-0.5"
                    >
                      +91 98421 39997
                    </a>
                  </div>
                </div>
                <span className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-[#F3EFE6] text-warmgrey-600 border border-[#E6E0D2] shrink-0 self-start sm:self-center">
                  Immediate support
                </span>
              </div>
            </div>

            {/* Card 2: Fast WhatsApp Dispatch */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] shadow-sm hover:border-burnt-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/20 shrink-0">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-warmgrey-400 block">
                      FAST WHATSAPP DISPATCH
                    </span>
                    <a
                      href="https://wa.me/919842139997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-graphite-900 hover:text-burnt-500 transition-colors block leading-tight mt-0.5"
                    >
                      Send Photos & Motherboard Model
                    </a>
                  </div>
                </div>
                <span className="text-xs font-sans font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0 self-start sm:self-center">
                  Instant Chat
                </span>
              </div>
            </div>

            {/* Card 3: Official Inquiries & AMC */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] shadow-sm hover:border-burnt-500/40 transition-all">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F0EFEB] text-graphite-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-warmgrey-400 block">
                    OFFICIAL INQUIRIES & AMC
                  </span>
                  <a
                    href="mailto:jaishankarpcservices2021@gmail.com"
                    className="text-xs sm:text-sm font-bold text-graphite-900 hover:text-burnt-500 transition-colors block break-all mt-0.5"
                  >
                    jaishankarpcservices2021@gmail.com
                  </a>
                  <span className="text-xs text-warmgrey-400 block mt-0.5">
                    We reply in 2 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Laboratory Operating Hours */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0B1015] text-white border border-white/10 shadow-xl space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF7A45]" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A45]">
                  LABORATORY OPERATING HOURS
                </h4>
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-ivory-200/90 font-sans leading-relaxed">
                <p>Monday – Saturday: 9:30 AM – 9:00 PM IST</p>
                <p className="text-ivory-300/80">Sunday: Emergency On-Call Diagnostics Only</p>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-ivory-200 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Doorstep pickup available across Tamil Nadu</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Engineering Request Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFF5EE] via-[#F8F9FA] to-[#EDF2F7] border border-[#E2E8F0] p-4 sm:p-8 shadow-xl space-y-5 relative"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
                  Direct WhatsApp Engineering Request
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill in your hardware details below and our lead technician will review them immediately.
                </p>
              </div>

              {/* 2-Column Responsive Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                
                {/* Column 1 */}
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="form-name" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      YOUR NAME <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        id="form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 placeholder:text-gray-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm transition-all"
                        placeholder="e.g. Ramesh Shankar"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="form-email" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      EMAIL ADDRESS (OPTIONAL)
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="email"
                        id="form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 placeholder:text-gray-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm transition-all"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  {/* Device / Hardware Brand & Model */}
                  <div>
                    <label 
                      htmlFor="form-model" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      DEVICE / HARDWARE BRAND & MODEL (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      id="form-model"
                      value={formData.deviceModel}
                      onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 placeholder:text-gray-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm transition-all"
                      placeholder="e.g. Dell XPS 15, Custom AMD PC"
                    />
                  </div>

                  {/* Attach Photos Dropzone */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5">
                      ATTACH PHOTOS (OPTIONAL) - <span className="font-normal capitalize text-gray-500">Show us the issue or motherboard model</span>
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-300 hover:border-burnt-500 rounded-xl bg-white/70 hover:bg-white p-3.5 flex items-center justify-center gap-3 cursor-pointer transition-all shadow-sm"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                        <Paperclip className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-gray-600 truncate">
                        {files.length > 0 
                          ? `${files.length} photo(s) selected (${files.map(f => f.name).join(', ')})`
                          : 'Click or drag files here to upload (Max 10MB)'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4 flex flex-col h-full">
                  {/* Phone */}
                  <div>
                    <label 
                      htmlFor="form-phone" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      PHONE / WHATSAPP NUMBER <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <MessageCircle className="w-4 h-4 text-[#25D366] absolute left-3.5 pointer-events-none fill-current" />
                      <input
                        type="tel"
                        id="form-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 placeholder:text-gray-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm transition-all"
                        placeholder="e.g. 98421 39997"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label 
                      htmlFor="form-service" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      SERVICE TYPE
                    </label>
                    <div className="relative flex items-center">
                      <select
                        id="form-service"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm appearance-none cursor-pointer transition-all"
                      >
                        <option value="Repair / Diagnostics">Repair / Diagnostics</option>
                        <option value="Custom PC Build">Custom PC Build</option>
                        <option value="AMC / Annual Maintenance">AMC / Annual Maintenance</option>
                        <option value="Upgrade Request">Upgrade Request</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Describe Hardware Issue */}
                  <div className="flex-1 flex flex-col">
                    <label 
                      htmlFor="form-message" 
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5"
                    >
                      DESCRIBE HARDWARE ISSUE OR BUILD REQUIREMENTS <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex-1 flex flex-col">
                      <textarea
                        id="form-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 500) })}
                        rows={5}
                        maxLength={500}
                        className="w-full flex-1 p-3.5 rounded-xl bg-white border border-gray-200 text-sm text-graphite-900 placeholder:text-gray-400 focus:outline-none focus:border-burnt-500 focus:ring-1 focus:ring-burnt-500 shadow-sm transition-all resize-none min-h-[140px]"
                        placeholder="e.g. Dell XPS laptop won't turn on after power surge; or looking for custom RTX 4070 build under 1.2 Lakhs."
                        required
                      />
                      <span className="text-[11px] text-gray-400 font-mono self-end mt-1">
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#F2542D] hover:from-[#f05a22] hover:to-[#df4620] text-white font-mono text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-[0.99] text-center"
              >
                <Send className="w-4 h-4 -rotate-12 shrink-0" />
                <span className="leading-snug">SEND TO LEAD TECHNICIAN VIA WHATSAPP</span>
              </button>

              {/* Security / Privacy Trust Text */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-sans pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your data is safe with us. We reply instantly via WhatsApp.</span>
              </div>
            </form>
          </div>

        </div>

        {/* Google Map Section */}
        <div className="rounded-3xl overflow-hidden border border-[#EAE6DC] shadow-xl bg-white p-2">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE6DC]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burnt-500" />
              <span className="font-mono text-xs font-bold text-graphite-900 uppercase tracking-wider">
                Laboratory Location: Jai Shankar PC Services, Madurai
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=JAI+SHANKAR+PC+SERVICES+Madurai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-burnt-500 font-bold hover:underline"
            >
              Open in Google Maps App &rarr;
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7793033931525!2d78.10006687590037!3d9.952311773851735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c9900f9e875f%3A0xf93138e3c33df70f!2sJAI%20SHANKAR%20PC%20SERVICES!5e0!3m2!1sen!2sin!4v1765730817609!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl"
          />
        </div>

      </div>
    </section>
  )
}

