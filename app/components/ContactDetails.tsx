/** Business contact block shared across marketing pages. */
export default function ContactDetails() {
  return (
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
  )
}
