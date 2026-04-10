import Link from "next/link"
import A2PNav from "@/app/components/A2PNav"
import A2PFooter from "@/app/components/A2PFooter"
import ContactDetails from "@/app/components/ContactDetails"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <A2PNav showContactLink={false} />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Contact SMOVR
            </h1>

            <p className="text-gray-600 mb-10 text-center">
              Reach us by phone or email—we&apos;ll follow up to discuss your needs and next steps.
            </p>

            <ContactDetails />

            <p className="text-sm text-gray-500 mt-10 text-center">
              By contacting us, you agree to our{' '}
              <Link href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</Link>
              {' '}and{' '}
              <Link href="/terms" className="text-emerald-700 hover:underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h2>
            <p className="text-2xl font-bold text-emerald-700">
              <a href="tel:+19179753793">(917) 975-3793</a>
            </p>
          </div>
        </div>
      </section>

      <A2PFooter />
    </div>
  )
}
