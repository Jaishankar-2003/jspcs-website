'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Karthik',
    location: 'Madurai',
    service: 'Thermal Cleaning & Fan Service',
    rating: 5,
    text: 'My laptop was overheating constantly. They cleaned, serviced, and fixed it perfectly. Works like brand new now. Truly impressed with the honesty and speed!',
  },
  {
    name: 'Aishwarya',
    location: 'Coimbatore',
    service: 'Chip-Level Motherboard Diagnostic',
    rating: 5,
    text: 'Amazing chip-level repair! My motherboard was declared dead by other authorized centers, but Jai Shankar repaired it within 24 hours. Very transparent team.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Chennai',
    service: 'Motherboard Power Rail Repair',
    rating: 5,
    text: 'Excellent service! They fixed my laptop motherboard issue quickly and at a reasonable price. Highly recommended across Tamil Nadu!',
  },
  {
    name: 'Arun Kumar',
    location: 'Madurai / Hyderabad',
    service: 'Custom Architectural Gaming Rig',
    rating: 5,
    text: 'Got my PC assembled exactly the way I wanted. Premium components, neat cable management, silent fans, and excellent guidance throughout.',
  },
  {
    name: 'Vignesh',
    location: 'Trichy',
    service: 'NVMe Gen4 SSD Migration',
    rating: 5,
    text: 'Smooth and fast service. They upgraded my HDD to SSD, and the speed difference is insane. Great value for money and zero data lost!',
  },
  {
    name: 'Meghana',
    location: 'Bangalore / Madurai',
    service: 'Doorstep Pickup & Delivery',
    rating: 5,
    text: 'Their pickup and drop service saved me a lot of time. Transparent pricing, continuous photo updates, and very polite communication.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-[#EAE6DC] overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Client Verification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
            Trusted by Creators, Studios & Students
          </h2>
          <p className="text-sm sm:text-base text-warmgrey-400">
            Real feedback from customers across Madurai, Chennai, Coimbatore, and Trichy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] p-5 sm:p-12 shadow-xl space-y-6 relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-burnt-500 text-burnt-500" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-sage-400/15 text-graphite-800 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                  <span>Verified Google Client</span>
                </div>
              </div>

              <blockquote className="text-base sm:text-xl md:text-2xl text-graphite-900 font-medium leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="pt-6 border-t border-[#EAE6DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-graphite-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-warmgrey-400 font-mono break-words">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                  </p>
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-xl border border-[#D8D2C2] hover:bg-ivory-100 text-graphite-800 transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-xl border border-[#D8D2C2] hover:bg-ivory-100 text-graphite-800 transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-burnt-500 w-8'
                    : 'bg-[#D8D2C2] w-2 hover:bg-warmgrey-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
