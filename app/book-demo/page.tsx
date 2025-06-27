'use client'

import { useState } from 'react'
import Header from "@/app/components/Header"
import { submitBookingForm } from '@/app/actions/book-demo'

export default function BookDemo() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    company: ''
  })
  const [emailError, setEmailError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [submitStatus, setSubmitStatus] = useState<{
    loading: boolean;
    error?: string;
    success?: boolean;
  }>({
    loading: false
  })

  // Validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid work email address'
    }
    return ''
  }

  const validateFirstName = (first_name: string) => {
    if (first_name.length < 2) {
      return 'Name must be at least 2 characters long'
    }
    if (first_name.length > 100) {
      return 'Name must be less than 100 characters'
    }
    return ''
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value
    setFormData({ ...formData, first_name: newFirstName })
    setFirstNameError(validateFirstName(newFirstName))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setFormData({ ...formData, email: newEmail })
    setEmailError(validateEmail(newEmail))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Final validation before submit
    const emailValidationError = validateEmail(formData.email)
    const firstNameValidationError = validateFirstName(formData.first_name)

    if (emailValidationError) {
      setEmailError(emailValidationError)
      return
    }

    if (firstNameValidationError) {
      setFirstNameError(firstNameValidationError)
      return
    }

    setSubmitStatus({ loading: true })

    try {
      const result = await submitBookingForm(formData)

      if (result.error) {
        throw new Error(result.error)
      }

      setSubmitStatus({ loading: false, success: true })
      setFormData({ first_name: '', email: '', company: '' }) // Reset form
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                You're One Step Away from Recovering Thousands in Lost Revenue
              </h1>
              <p className="text-xl text-gray-600">
                Find out how much preventable revenue your clinic is losing — and how we fix it without touching your EHR.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 rounded-3xl p-8 mb-16">
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleFirstNameChange}
                      className={`w-full px-4 py-3 rounded-lg border ${firstNameError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      required
                    />
                    {firstNameError && (
                      <p className="mt-1 text-sm text-red-600">
                        {firstNameError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 rounded-lg border ${emailError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      required
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">
                        {emailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={!!emailError || !formData.email || !formData.first_name || submitStatus.loading}
                  >
                    {submitStatus.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Book Discovery Call'}
                  </button>
                  {submitStatus.error && (
                    <p className="mt-3 text-sm text-red-600 text-center">
                      {submitStatus.error}
                    </p>
                  )}
                  {submitStatus.success && (
                    <div className="mt-3 text-sm text-emerald-600 text-center">
                      <p>Thanks! We'll be in touch shortly to schedule your discovery call.</p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* What Will Happen Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">📋</span> What to Expect on Your Call:
              </h2>
              <ul className="space-y-4">
                {[
                  "We'll analyze your current scheduling and cancellation patterns",
                  "Calculate your clinic's potential revenue recovery opportunity",
                  "Show you how our system works without disrupting your EHR",
                  "Discuss implementation timeline and ROI projections"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens After Section */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">✅</span> Next Steps After Your Call:
              </h2>
              <ul className="space-y-4">
                {[
                  "Receive a customized revenue protection plan for your practice",
                  "Get a clear implementation timeline that works for your team",
                  "Start protecting your revenue with zero disruption to your workflow"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 