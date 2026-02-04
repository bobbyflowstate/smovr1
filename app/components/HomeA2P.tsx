'use client'

import Link from "next/link"
import A2PNav from "./A2PNav"
import A2PFooter from "./A2PFooter"

export default function HomeA2P() {
  return (
    <div className="min-h-screen bg-white">
      <A2PNav showContactLink={true} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to SMOVR
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Providing automated patient communication and scheduling solutions for healthcare practices. 
            We help clinics recover revenue, reduce no-shows, and improve patient engagement through 
            intelligent SMS automation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800 transition-colors"
          >
            Contact Form
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              SMOVR is owned and operated by Kevin P. Stratmann, DBA SMOVR. Our team&apos;s focus is to help 
              healthcare practices recover lost revenue, reduce appointment no-shows, and improve patient 
              communication through automated SMS solutions. We take pride in providing compliant, 
              HIPAA-friendly services that address your specific practice needs.
            </p>
          </div>

          {/* Services */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Services</h3>
            <ul className="max-w-md mx-auto space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                Two-Way SMS Automation
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                Appointment Scheduling Recovery
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                Patient Communication Workflows
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                Real-Time Text Messaging
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
          
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Address</h3>
                <p className="text-gray-600">
                  253 Garth Road, Unit 5G<br />
                  Scarsdale, NY 10583
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+19179753793" className="text-emerald-700 hover:text-emerald-800">
                    (917) 975-3793
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:kevin@smovr.com" className="text-emerald-700 hover:text-emerald-800">
                    kevin@smovr.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <A2PFooter />
    </div>
  )
}
