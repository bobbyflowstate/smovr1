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
              Last Updated: February 16, 2026
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
                  Welcome to SMOVR ("Company," "we," "us," or "our"). We are committed to protecting your privacy and maintaining transparency in how we collect, use, and safeguard your information when you engage with our services.
                </p>
                <p className="text-gray-600 mb-4">
                  This Privacy Policy explains how we handle data in connection with our scheduling automation tools, web forms, and communication systems, which operate outside of protected health information and within applicable compliance standards.
                </p>
                <p className="text-gray-600 mb-4">
                  By using our website or services, you consent to the practices outlined in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal or business information when you:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Fill out a contact or demo request form</li>
                  <li className="text-gray-600">Engage in onboarding or setup discussions</li>
                  <li className="text-gray-600">Register for services or consultations</li>
                </ul>
                <p className="text-gray-600 mb-4">This may include:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Name</li>
                  <li className="text-gray-600">Email address</li>
                  <li className="text-gray-600">Company or clinic name</li>
                  <li className="text-gray-600">Mobile phone number</li>
                  <li className="text-gray-600">General business information such as size or appointment volume</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 System Activity (Non-PHI)</h3>
                <p className="text-gray-600 mb-4">
                  Our platform does not access or store protected health information. For operational purposes, we may process:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Appointment time and date data only</li>
                  <li className="text-gray-600">Status indicators such as cancelled or filled</li>
                  <li className="text-gray-600">Non-identifiable scheduling activity</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Website Data</h3>
                <p className="text-gray-600 mb-4">
                  When visiting https://smovr.com, we may collect:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Browser type</li>
                  <li className="text-gray-600">Visit duration</li>
                  <li className="text-gray-600">Page interactions</li>
                  <li className="text-gray-600">Analytics and cookie data</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
                <p className="text-gray-600 mb-4">We use collected information to:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Provide demonstrations and onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Configure scheduling automation and SMS delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Respond to inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Maintain compliance and account administration</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We do not access clinical patient records and do not process protected health information.
                </p>
              </div>

              {/* SMS Communications and Consent */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. SMS Communications and Consent</h2>
                <p className="text-gray-600 mb-4">
                  When you provide your mobile phone number through our website forms or during scheduling or onboarding interactions, you may opt in to receive SMS text messages from SMOVR.
                </p>
                <p className="text-gray-600 mb-4">
                  These messages may include appointment reminders, confirmations, scheduling updates, directions, missed appointment notifications, onboarding communications, and, if separately consented to, marketing communications.
                </p>
                <p className="text-gray-600 mb-4">
                  Message frequency may vary. Message and data rates may apply.
                </p>
                <p className="text-gray-600 mb-4">
                  You may opt out of SMS communications at any time by replying STOP to any message. For assistance, reply HELP.
                </p>
                <p className="text-gray-600 mb-4">
                  Mobile information and SMS consent will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.
                </p>
                <p className="text-gray-600 mb-4">
                  We use third-party messaging providers, including Twilio, to deliver SMS communications in compliance with applicable telecommunications regulations.
                </p>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell personal information.
                </p>
                <p className="text-gray-600 mb-4">We may share limited information with:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Service providers necessary to operate our platform, who are contractually obligated to safeguard data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Legal authorities if required by law</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Successor entities in the event of a merger or acquisition</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Mobile information and SMS consent will not be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.
                </p>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">Depending on your jurisdiction, you may request:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Access to your information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Correction of inaccurate data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Deletion where legally permitted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Opt out of communications</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  To exercise these rights, contact: kevin@smovr.com
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
                <p className="text-gray-600 mb-4">We implement reasonable safeguards including:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">SSL encryption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Role-based access controls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">&#x2022;</span>
                    <span className="text-gray-600">Secure infrastructure providers</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We do not process or store protected health information.
                </p>
              </div>

              {/* Updates to This Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy as required by operational or legal changes. Continued use of our services constitutes acceptance of any revisions.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
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
