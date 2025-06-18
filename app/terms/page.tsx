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
              Last Updated: 2-16-2025
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
                  Welcome to LeadShield ("Company," "we," "us," or "our"). These Terms and Conditions govern your use of our AI-powered voice assistant services (the "Services").
                </p>
                <p className="text-gray-600 mb-4">
                  By accessing or using our Services, you agree to these Terms. If you do not agree, please do not use our Services.
                </p>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-600 mb-4">
                  LeadShield provides AI-powered voice assistants designed to handle inbound calls and streamline customer interactions. Our Services currently include:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">AI voice call answering and customer support.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">AI-driven appointment booking and call routing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">24/7 availability to ensure no missed calls.</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Additional services such as SMS/text messaging, chat widgets, CRM management, automations, and database reactivations are available as upgrades. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time.
                </p>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility and Account Registration</h2>
                <p className="text-gray-600 mb-4">To use our Services, you must:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Be at least 18 years old.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Provide accurate and up-to-date business information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Agree to comply with all applicable laws and regulations.</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  If you create an account with us, you are responsible for maintaining the confidentiality of your login information and restricting access to your account.
                </p>
              </div>

              {/* Acceptable Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                <p className="text-gray-600 mb-4">By using our Services, you agree NOT to:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Use our AI assistant for unlawful, fraudulent, or deceptive purposes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Engage in spam, robocalling, or telemarketing that violates industry regulations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Interfere with or disrupt our Services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    <span className="text-gray-600">Attempt to reverse-engineer, modify, or misuse our AI system.</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We reserve the right to suspend or terminate accounts that violate these conditions.
                </p>
              </div>

              {/* Payments and Subscription */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payments and Subscription</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Pricing</h3>
                <p className="text-gray-600 mb-4">
                  LeadShield provides a fixed monthly subscription tailored to your selected services. A one-time setup fee is included in your first billing cycle and may be spread over three months.
                </p>
                <p className="text-gray-600 mb-4">
                  Service activation marks the start of your billing period. Invoices are typically issued within 7 days of activation.
                </p>
                <p className="text-gray-600 mb-4">
                  A secure payment method for usage minutes will be collected via Stripe, our third-party payment processor, prior to activation. LeadShield does not store or process your payment information directly.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Billing & Renewals</h3>
                <p className="text-gray-600 mb-4">
                  Subscriptions are billed on a monthly basis and will automatically renew unless canceled before the next billing cycle. Payments are processed securely through our designated payment providers. Failure to complete payment may result in service suspension.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Refunds & Cancellations</h3>
                <p className="text-gray-600 mb-4">
                  The setup fee is non-refundable. Subscription fees are non-refundable once a billing cycle has started. You may cancel your subscription at any time by contacting support at info@leadshield.xyz.
                </p>
              </div>

              {/* Service Limitations */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Limitations and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 No Guarantee of Outcomes</h3>
                <p className="text-gray-600 mb-4">
                  While our AI is designed to enhance customer engagement, we do not guarantee specific business results, such as increased sales or customer conversion rates.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Technical Limitations</h3>
                <p className="text-gray-600 mb-4">
                  Our Services depend on third-party providers (e.g., Twilio for calls). Downtime, interruptions, or failures caused by third parties are beyond our control.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Compliance Responsibility</h3>
                <p className="text-gray-600 mb-4">
                  Users are responsible for ensuring compliance with industry regulations (e.g., TCPA for calling, HIPAA for medical data). We are not liable for non-compliant use of our Services.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">To the maximum extent permitted by law:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">LeadShield is not liable for indirect, incidental, or consequential damages arising from service use.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Our total liability under any claim will not exceed the total amount paid for the past 3 months of service.</span>
                  </li>
                </ul>
              </div>

              {/* Modifications to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We may update these Terms at any time. If significant changes occur, we will notify users via email or our website. Continued use of the Services after changes constitute acceptance of the revised Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law & Dispute Resolution</h2>
                <p className="text-gray-600 mb-4">
                  These Terms are governed by the laws of New York, USA.
                </p>
                <p className="text-gray-600 mb-4">
                  Any disputes will first be attempted to be resolved amicably. If unresolved, disputes may be subject to arbitration or legal proceedings in New York, USA.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms, contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">📩</span>
                    Email: info@leadshield.xyz
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">🌐</span>
                    Website: https://leadshield.xyz
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