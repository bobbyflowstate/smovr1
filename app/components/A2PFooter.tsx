'use client'

import Link from "next/link"

export default function A2PFooter() {
  return (
    <>
      {/* Quick Links */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A3B3B] text-gray-300">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 text-sm">
            <p>
              This page is for general informational purposes only and does not constitute legal or medical advice.
            </p>
            <p>
              If you opt in to receive SMS from us, reply STOP to opt out at any time.
            </p>
            <p className="pt-4 border-t border-gray-700">
              © {new Date().getFullYear()} Kevin P. Stratmann, DBA SMOVR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
