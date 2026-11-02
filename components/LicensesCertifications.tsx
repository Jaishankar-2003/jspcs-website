'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Award, ShieldCheck, FileCheck, ExternalLink, X, CheckCircle } from 'lucide-react'

const licenses = [
  {
    icon: Award,
    title: 'Master Chip-Level Motherboard Certification',
    issuedBy: 'Advanced Electronics & BGA Engineering Council',
    issuedDate: 'Certified Laboratory',
    tag: 'HARDWARE CREDENTIAL',
    image: '/certificates/chip.png',
    type: 'modal',
  },
  {
    icon: ShieldCheck,
    title: 'Government of India MSME Registered',
    issuedBy: 'Ministry of Micro, Small & Medium Enterprises',
    issuedDate: 'Verified Enterprise',
    tag: 'GOVERNMENT OF INDIA',
    type: 'link',
    url: 'https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=j50RCd7n0wmncFGccmyrD8D3NynSpw2QZsbSnDiEPCM=',
  },
  {
    icon: FileCheck,
    title: 'ESD Class-1 Safe Bench Protocol',
    issuedBy: 'Electrostatic Discharge Association Standards',
    issuedDate: 'Active Bench Standard',
    tag: 'LAB PROTOCOL',
    type: 'text',
    desc: 'Strict grounding mats, wrist straps, and calibrated soldering stations to prevent silicon damage.',
  },
  {
    icon: Award,
    title: 'Non-Destructive Forensic Storage Extraction',
    issuedBy: 'Hardware Data Recovery Standards',
    issuedDate: 'Certified Protocol',
    tag: 'DATA PROTECTION',
    type: 'text',
    desc: 'Bit-by-bit recovery protocols for failing NAND flash and mechanical hard disks.',
  },
]

export default function LicensesCertifications() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <section id="licenses-certifications" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-b border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Formal Verification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
            Accreditations & Government Registration
          </h2>
          <p className="text-sm sm:text-base text-warmgrey-400">
            Backed by official government MSME recognition and certified chip-level laboratory benchmarks.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {licenses.map((license, index) => {
            const Icon = license.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => {
                  if (license.type === 'link' && license.url) {
                    window.open(license.url, '_blank', 'noopener,noreferrer')
                  } else if (license.type === 'modal' && license.image) {
                    setPreviewImage(license.image)
                  }
                }}
                className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] shadow-sm hover:shadow-lg hover:border-burnt-500/50 transition-all flex flex-col justify-between group ${
                  license.type !== 'text' ? 'cursor-pointer' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-burnt-500 uppercase tracking-wider">
                      {license.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-ivory-100 text-burnt-500 flex items-center justify-center group-hover:bg-burnt-500 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors leading-snug">
                      {license.title}
                    </h3>
                    <p className="text-xs text-warmgrey-400 font-sans mt-2">
                      {license.issuedBy}
                    </p>
                  </div>

                  {license.desc && (
                    <p className="text-xs text-graphite-800 leading-relaxed pt-1">
                      {license.desc}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE6DC] flex items-center justify-between text-xs font-mono">
                  <span className="text-warmgrey-400 font-medium">
                    {license.issuedDate}
                  </span>
                  {license.type === 'link' && (
                    <span className="inline-flex items-center gap-1 text-burnt-500 font-bold group-hover:underline">
                      Verify <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                  {license.type === 'modal' && (
                    <span className="inline-flex items-center gap-1 text-burnt-500 font-bold group-hover:underline">
                      View Certificate
                    </span>
                  )}
                  {license.type === 'text' && (
                    <CheckCircle className="w-4 h-4 text-sage-500" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-2xl w-full bg-graphite-900 rounded-3xl p-4 border border-white/10 shadow-2xl space-y-4">
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-3 px-2">
              <span className="font-mono text-xs font-bold text-burnt-400">
                VERIFIED CREDENTIAL // BGA LAB
              </span>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded-lg text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white">
              <Image
                src={previewImage}
                alt="Certificate Document"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
