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
              Last Updated: June 16, 2025
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
                  Welcome to Smovr ("Company," "we," "us," or "our"). We are committed to protecting your privacy and maintaining transparency in how we collect, use, and safeguard your information when you engage with our services.
                </p>
                <p className="text-gray-600 mb-4">
                  This Privacy Policy explains how we handle data in connection with our scheduling logic automation tools, web forms, and communication systems — all of which are designed to operate outside of PHI and within industry compliance standards.
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
                  <li className="text-gray-600">Engage with scheduling or setup conversations</li>
                  <li className="text-gray-600">Sign up for services or consultations</li>
                </ul>
                <p className="text-gray-600 mb-4">This may include:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Name</li>
                  <li className="text-gray-600">Work email</li>
                  <li className="text-gray-600">Clinic or company name</li>
                  <li className="text-gray-600">Phone number</li>
                  <li className="text-gray-600">General practice info (e.g., size, specialty, number of appointments)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 System Activity (Non-PHI)</h3>
                <p className="text-gray-600 mb-4">
                  Our platform does not access or store protected health information (PHI). However, for operational purposes, we may securely process:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Appointment slot data (time/date only — not patient names)</li>
                  <li className="text-gray-600">Status flags (e.g., cancelled, no-show, filled)</li>
                  <li className="text-gray-600">Non-identifiable calendar activity used to drive logic-based rescheduling</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Website and Form Data</h3>
                <p className="text-gray-600 mb-4">
                  We may collect usage data when you visit https://smovr.com, including:
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-gray-600">Browser type and visit duration</li>
                  <li className="text-gray-600">Page views and button clicks</li>
                  <li className="text-gray-600">Cookies (for analytics and form autofill)</li>
                  <li className="text-gray-600">UTM tracking (when clicking from emails or campaigns)</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use collected data to:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Evaluate scheduling inefficiencies and ROI estimates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Provide tailored demos, proposals, or onboarding support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Configure your automation logic and SMS delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Respond to form submissions or support inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-600">Ensure messaging compliance during registration (if needed)</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  We do not use your data to train open-ended AI systems. We never access PHI or clinical patient records.
                </p>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>Service Providers</strong> — We work with trusted infrastructure partners (e.g., Twilio for compliant SMS delivery) who are contractually bound to uphold security and confidentiality.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>Legal or Regulatory Requirements</strong> — We may share limited data when required to comply with applicable laws, subpoenas, or enforcement obligations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>Business Transitions</strong> — In the event of a company sale, merger, or restructuring, non-sensitive business information may be transferred under the same privacy protections.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600"><strong>User Consent</strong> — We never sell your information. We will always request your consent before using your data in new ways.</span>
                  </li>
                </ul>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">Depending on your region, you may request the following at any time:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Access</strong> — View what data we've collected about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Correction</strong> — Update inaccurate or outdated information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Deletion</strong> — Request your data be removed (unless retention is required by law)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">🔹</span>
                    <span className="text-gray-600"><strong>Opt-Out</strong> — Stop receiving communications or future demos</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-4">
                  To exercise your rights, contact us at:
                  <br />
                  <span className="inline-flex items-center mt-2">
                    <span className="mr-2">📩</span>
                    kevin@smovr.com
                  </span>
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-600 mb-4">We take your data security seriously:</p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">All transmissions are encrypted using SSL protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">Stored data is limited and protected with role-based access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">We maintain compliance with TCPA, CAN-SPAM, CCPA, and GDPR as applicable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✔️</span>
                    <span className="text-gray-600">We do not process or store any PHI (Protected Health Information)</span>
                  </li>
                </ul>
              </div>

              {/* Updates to This Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy to reflect service changes or legal requirements. When material changes occur, we will notify users via email or our website.
                </p>
                <p className="text-gray-600 mb-4">
                  Continued use of our services after updates implies acceptance of the revised terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions or concerns regarding this policy, reach out to:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
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