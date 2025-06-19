'use client'

import Link from "next/link"
import Image from 'next/image'
import Header from "@/app/components/Header"

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last Updated: June 16, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to Smovr ("Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our revenue protection and rescheduling automation services for healthcare organizations (the "Services").
                </p>
                <p className="text-gray-600 mb-4">
                  By accessing or using our Services, you agree to comply with these Terms. If you do not agree, please do not use our Services.
                </p>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-600 mb-4">
                  Smovr offers an AI-enhanced logic layer that operates outside of your EHR, designed to protect revenue by filling calendar gaps caused by cancellations, no-shows, and provider schedule changes — without accessing protected health information (PHI).
                </p>
                <p className="text-gray-600 mb-4">Our services may include:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Real-time detection of calendar disruptions (e.g., cancellations, call-outs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Smart rescheduling via pre-approved SMS and slot logic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Optional multi-location and waitlist backfill support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Setup and configuration for compliant SMS delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Ongoing optimization and support</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify, upgrade, suspend, or discontinue aspects of the Services at any time.
                </p>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility and Access</h2>
                <p className="text-gray-600 mb-4">To use our Services, you must:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Be at least 18 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Be a legal representative or decision-maker for a healthcare organization or clinic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Provide accurate and complete information during setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Comply with all applicable laws and industry regulations</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the confidentiality of any access credentials provided.
                </p>
              </div>

              {/* Acceptable Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                <p className="text-gray-600 mb-4">You agree not to:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Use the system to send misleading, non-compliant, or deceptive messages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Violate HIPAA, TCPA, or other relevant compliance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Attempt to reverse engineer or misuse the platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Introduce automation loops or external logic without our approval</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Violations may result in account suspension or termination.
                </p>
              </div>

              {/* Payments and Subscription */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pricing, Billing & Subscription</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Pricing</h3>
                <p className="text-gray-600 mb-4">
                  Smovr provides custom monthly pricing based on patient volume, practice complexity, and scheduling logic required. All subscriptions include a one-time setup and configuration fee, which may be split across multiple billing cycles.
                </p>
                <p className="text-gray-600 mb-4">
                  We use Stripe as our secure payment processor and do not store payment details directly.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Billing & Renewals</h3>
                <p className="text-gray-600 mb-4">
                  Subscriptions renew monthly and are billed automatically unless canceled before the next billing cycle. Invoices are sent within 7 days of service activation. Non-payment may result in suspension or loss of service.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Refund Policy</h3>
                <p className="text-gray-600 mb-4">
                  The setup fee is non-refundable. Subscription fees are non-refundable after the billing cycle begins. Cancellations can be made by contacting support at kevin@smovr.com.
                </p>
              </div>

              {/* Service Limitations */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Limitations & Disclaimers</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 No Guarantees of ROI</h3>
                <p className="text-gray-600 mb-4">
                  While our system is designed to recover lost revenue and reduce staff burden, we do not guarantee specific financial or operational outcomes. ROI may vary based on your clinic's structure and adherence to follow-up workflows.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Technical Dependencies</h3>
                <p className="text-gray-600 mb-4">
                  Our solution relies on third-party infrastructure (e.g., calendar software, Twilio, messaging providers). We are not liable for service interruptions caused by external platform outages.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Compliance Responsibility</h3>
                <p className="text-gray-600 mb-4">
                  Smovr does not access or process PHI. You are responsible for ensuring proper use within your compliance framework, including any regulatory registration (e.g., A2P, HIPAA, etc.).
                </p>
                <p className="text-gray-600 mb-4">
                  We provide tools and guidance to support compliance, but final responsibility rests with the user.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">To the fullest extent permitted by law:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Smovr shall not be liable for indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Our total liability shall not exceed the amount paid by you in the three months preceding any claim</span>
                  </li>
                </ul>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We may update these Terms periodically. Material changes will be communicated via email or website notification. Continued use of our Services implies acceptance of the updated Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These Terms are governed by the laws of the State of New York, USA.
                </p>
                <p className="text-gray-600 mb-4">
                  Any unresolved disputes shall be submitted to confidential arbitration or legal proceedings in New York, unless otherwise mutually agreed.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms or require assistance, please contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">👤</span>
                    Kevin Stratmann
                  </p>
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">📩</span>
                    Email: kevin@smovr.com
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">🌐</span>
                    Website: https://smovr.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 