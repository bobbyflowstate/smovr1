'use client'

import Link from "next/link"
import Image from 'next/image'
import Header from "@/app/components/Header"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Last Updated: 2-16-2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to LeadShield ("Company," "we," "us," or "our"). Your privacy is important to us, and we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered voice assistant services.
                </p>
                <p className="text-gray-600 mb-4">
                  By using our services, you consent to the collection and use of information as outlined in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
                <p className="text-gray-600 mb-4">
                  We collect personal information when you interact with our AI assistant, including:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Name (for personalized responses)</li>
                  <li className="text-gray-600">Phone number (for call handling and follow-ups)</li>
                  <li className="text-gray-600">Email address (for communication and appointment confirmations)</li>
                  <li className="text-gray-600">Business details (if provided during conversations)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Information Collected Automatically</h3>
                <p className="text-gray-600 mb-4">
                  Our AI assistant may automatically collect:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Call logs and timestamps</li>
                  <li className="text-gray-600">Call transcripts for quality assurance and service improvement</li>
                  <li className="text-gray-600">Interaction history (to enhance responses)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 mb-4">
                  If you visit our website, we may collect cookies or other tracking data to enhance user experience and measure engagement.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the collected information to:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Provide AI-powered call handling, appointment scheduling, and customer engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Improve customer service by analyzing interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Ensure compliance with regulatory requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Prevent fraud, enhance security, and maintain service reliability</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information.
                </p>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>With Service Providers</strong> – We use third-party providers (e.g., Twilio for voice services) to facilitate our AI assistant. These providers follow strict security and confidentiality measures.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>Legal Compliance</strong> – If required by law, court order, or to prevent fraud or abuse, we may disclose necessary data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>Business Transfers</strong> – In the event of a merger, sale, or acquisition, your information may be transferred under the same privacy commitments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>User Consent</strong> – We will obtain explicit consent before sharing information for any additional purposes.</span>
                  </li>
                </ul>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Access & Correction:</strong> Request a copy of your personal data or ask for corrections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Opt-Out of AI Calls:</strong> You can stop AI interactions anytime by requesting opt-out via email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Data Deletion:</strong> Request that we erase your data unless legally required to retain it</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  To exercise these rights, contact us at:
                  <br />
                  <span className="inline-flex items-center mt-2">
                    <span className="mr-2">📩</span>
                    info@leadshield.xyz
                  </span>
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Encryption for stored and transmitted data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Restricted access to authorized personnel only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Compliance with TCPA, CCPA, and GDPR for data protection</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, contact us at:
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