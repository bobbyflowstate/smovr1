'use client'

import { useState } from "react"
import Link from "next/link"
import { submitContactForm } from "@/app/actions/contact"
import A2PNav from "@/app/components/A2PNav"
import A2PFooter from "@/app/components/A2PFooter"

// Format phone number as user types
function formatPhoneNumber(value: string): string {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '')
  
  // Limit to 10 digits for US numbers
  const limited = digits.slice(0, 10)
  
  // Format based on length
  if (limited.length === 0) {
    return ''
  } else if (limited.length <= 3) {
    return `(${limited}`
  } else if (limited.length <= 6) {
    return `(${limited.slice(0, 3)}) ${limited.slice(3)}`
  } else {
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`
  }
}

export default function Contact() {
  const [phone, setPhone] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [transactionalConsent, setTransactionalConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const result = await submitContactForm({
      phone,
      marketing_consent: marketingConsent,
      transactional_consent: transactionalConsent
    })

    setIsSubmitting(false)

    if (result.success) {
      setSubmitStatus('success')
      setPhone('')
      setMarketingConsent(false)
      setTransactionalConsent(false)
    } else {
      setSubmitStatus('error')
      setErrorMessage(result.error || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <A2PNav showContactLink={false} />

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Contact SMOVR
            </h1>
            
            <p className="text-gray-600 mb-8 text-center">
              Leave your phone number and we&apos;ll contact you to discuss your needs and schedule an appointment.
            </p>

            {submitStatus === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
                <p className="text-emerald-800 font-medium">Thank you! We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(555) 555-5555"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  />
                </div>

                {/* Marketing Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="marketingConsent"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="marketingConsent" className="text-sm text-gray-600">
                    I consent to receive marketing text messages from Kevin P. Stratmann, DBA SMOVR at the phone number provided. 
                    Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </label>
                </div>

                {/* Transactional Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="transactionalConsent"
                    checked={transactionalConsent}
                    onChange={(e) => setTransactionalConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor="transactionalConsent" className="text-sm text-gray-600">
                    I consent to receive non-marketing text messages from Kevin P. Stratmann, DBA SMOVR about my order updates, 
                    appointment reminders, etc. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </label>
                </div>

                {/* Privacy/Terms Note */}
                <p className="text-sm text-gray-500">
                  By continuing, you agree to our{' '}
                  <Link href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link href="/terms" className="text-emerald-700 hover:underline">Terms of Service</Link>.
                </p>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Call Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h2>
            <p className="text-2xl font-bold text-emerald-700">
              <a href="tel:+19179753793">(917) 975-3793</a>
            </p>
          </div>
        </div>
      </section>

      <A2PFooter />
    </div>
  )
}
