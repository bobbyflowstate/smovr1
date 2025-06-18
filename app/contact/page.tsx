'use client'

import Link from "next/link"
import Header from "@/app/components/Header"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="text-2xl">📬</span>
                <span className="text-sm font-medium text-gray-900">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Questions? Ideas? Just Want to Say Hi?
              </h1>
              <p className="text-xl text-gray-600">
                We'd love to hear from you. Whether you're curious about Joy, need help with setup, or want to explore if LeadShield is right for your business — we're here.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8 mb-16">
              {/* Call Us */}
              <div className="bg-emerald-50 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📞</span> Call Us
                </h2>
                <p className="text-gray-600 mb-2">You can reach us directly at:</p>
                <p className="text-2xl font-semibold text-emerald-700 mb-4">
                  (914) 895-5336
                </p>
                <p className="text-gray-600">
                  We're happy to chat and point you in the right direction.
                </p>
              </div>

              {/* Email Us */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📩</span> Email Us
                </h2>
                <p className="text-gray-600 mb-2">Prefer email? Just shoot us a message:</p>
                <p className="text-2xl font-semibold text-emerald-700 mb-4">
                  info@leadshield.xyz
                </p>
                <p className="text-gray-600">
                  We usually respond within 1 business day.
                </p>
              </div>

              {/* Not Sure Where to Start */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🧠</span> Not Sure Where to Start?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you're looking to try Joy for yourself, book a demo here and she'll call you directly.
                </p>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
                >
                  Book a Demo with Joy
                </Link>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center">
              <p className="text-gray-600 text-lg">
                We're a small team, and we genuinely care about every conversation — reach out anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 