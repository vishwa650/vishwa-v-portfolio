import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax effect for the giant background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    const form = formRef.current
    const firstName = form?.elements['first_name']?.value?.trim() || ''
    const lastName = form?.elements['last_name']?.value?.trim() || ''
    const email = form?.elements['user_email']?.value?.trim() || ''
    const message = form?.elements['message']?.value?.trim() || ''

    // Validation check
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: Open prefilled mailto link
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form?.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } else {
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus('success')
        form?.reset()
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax Giant "Contact" Text */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-0 w-full pointer-events-none z-0 overflow-hidden flex justify-center text-white/5 select-none"
      >
        <div
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter scale-y-[1.6] origin-top"
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red Contact Card aligned to the right */}
      <div
        data-aos="fade-up"
        className="relative z-10 ml-auto w-full md:w-[85%] lg:w-[75%] bg-[#ff2a2a] p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header Row: Reach Me Label & Instagram DM pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-white/80 font-bold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-black/20 hover:bg-black/40 text-white font-semibold text-xs tracking-wider uppercase border border-white/20 transition-all flex items-center gap-2"
            >
              <span>DM on Instagram</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col space-y-8">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white w-full transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white w-full transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white w-full transition-colors"
                />
              </div>
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white w-full transition-colors resize-none min-h-[120px] h-full"
              />
            </div>
          </div>

          {/* Bottom Notes & Consent */}
          <div className="space-y-4 pt-4 border-t border-white/20">
            <label className="flex items-start gap-3 cursor-pointer text-white/90 text-sm">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 accent-black rounded cursor-pointer"
              />
              <span>
                I consent to having my submitted information stored so Vishwa can respond to my inquiry.
              </span>
            </label>

            <p className="text-xs text-white/80">
              Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
            </p>

            <p className="text-xs text-white/90">
              Need urgent communication? Email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry`}
                className="underline font-bold hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto ${
                status === 'sending'
                  ? 'bg-white/30 border border-white/40 text-white cursor-wait'
                  : status === 'success'
                  ? 'bg-emerald-600 border border-emerald-400 text-white shadow-lg'
                  : status === 'error'
                  ? 'bg-red-950 border border-red-700 text-white shadow-lg'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#ff2a2a] group cursor-pointer shadow-lg'
              }`}
            >
              {status === 'sending' && (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              )}
              {status === 'success' && <span>Sent Successfully ✓</span>}
              {status === 'error' && <span>Failed — Try Again</span>}
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
