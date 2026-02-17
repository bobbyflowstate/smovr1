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
              Last Updated: February 16, 2026
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
                  Welcome to SMOVR ("Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our appointment scheduling and communication automation services for healthcare organizations (the "Services").
                </p>
                <p className="text-gray-600 mb-4">
                  By accessing or using our Services, you agree to comply with these Terms.
                </p>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-600 mb-4">
                  SMOVR provides automated appointment communication and scheduling workflow tools for healthcare practices. Our services may include:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Appointment confirmations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Scheduling updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Directions and location notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Missed appointment notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Two-way SMS communication tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Workflow configuration and optimization</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  SMOVR operates outside of protected health information systems and does not access or store protected health information.
                </p>
              </div>

              {/* SMS Program Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. SMS Program Terms</h2>
                <p className="text-gray-600 mb-4">
                  By providing your mobile phone number through SMOVR website forms, intake processes, or appointment scheduling interactions, you may opt in to receive SMS messages related to appointment and service communications.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Messages</h3>
                <p className="text-gray-600 mb-4">
                  Messages may include non-marketing appointment reminders, confirmations, scheduling updates, directions, missed appointment notifications, and other service-related communications.
                </p>
                <p className="text-gray-600 mb-4">
                  If a user separately opts in to marketing communications, promotional messages may also be sent. Marketing messages are delivered only to individuals who have provided explicit marketing consent.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Message Frequency</h3>
                <p className="text-gray-600 mb-4">
                  Message frequency varies depending on appointment activity and user interaction.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Message and Data Rates</h3>
                <p className="text-gray-600 mb-4">
                  Message and data rates may apply depending on your mobile carrier plan.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Instructions</h3>
                <p className="text-gray-600 mb-4">
                  You may opt out of SMS communications at any time by replying STOP to any message.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Help Instructions</h3>
                <p className="text-gray-600 mb-4">
                  For assistance, reply HELP or contact us at kevin@smovr.com.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consent and Data Use</h3>
                <p className="text-gray-600 mb-4">
                  Mobile information and SMS consent will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.
                </p>
              </div>

              {/* Eligibility and Acceptable Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Eligibility and Acceptable Use</h2>
                <p className="text-gray-600 mb-4">You must:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Be at least 18 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Be authorized to act on behalf of a healthcare organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Comply with applicable laws including TCPA and CTIA guidelines</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  You agree not to use the Services to send misleading, unlawful, or non-compliant messages.
                </p>
              </div>

              {/* Billing and Subscription */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Billing and Subscription</h2>
                <p className="text-gray-600 mb-4">
                  Pricing is customized based on practice size and configuration. Subscription fees renew monthly unless canceled. Setup fees are non-refundable. Non-payment may result in suspension of service.
                </p>
              </div>

              {/* Compliance Responsibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Compliance Responsibility</h2>
                <p className="text-gray-600 mb-4">
                  Participating clinics are responsible for obtaining and maintaining proper consent from patients before SMS communications are sent. SMOVR provides messaging infrastructure and compliance guidance but does not assume responsibility for clinic-level regulatory compliance.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  To the fullest extent permitted by law, SMOVR shall not be liable for indirect or consequential damages. Total liability shall not exceed the amount paid in the three months preceding any claim.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These Terms are governed by the laws of the State of New York.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">&#x1f464;</span>
                    Kevin P. Stratmann
                  </p>
                  <p className="text-gray-600 flex items-center mb-2">
                    <span className="mr-2">&#x1f4e9;</span>
                    Email: kevin@smovr.com
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">&#x1f310;</span>
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
