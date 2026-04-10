import Header from "@/app/components/Header"
import ContactDetails from "@/app/components/ContactDetails"

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                You&apos;re One Step Away from Recovering Thousands in Lost Revenue
              </h1>
              <p className="text-xl text-gray-600">
                Find out how much preventable revenue your clinic is losing — and how we fix it without touching your EHR.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 mb-16">
              <p className="text-gray-700 text-center text-lg mb-8 max-w-xl mx-auto">
                To schedule a discovery call or ask questions, contact us using the phone number or email below.
                We&apos;ll follow up confidentially.
              </p>
              <ContactDetails />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">📋</span> What to Expect on Your Call:
              </h2>
              <ul className="space-y-4">
                {[
                  "We'll analyze your current scheduling and cancellation patterns",
                  "Calculate your clinic's potential revenue recovery opportunity",
                  "Show you how our system works without disrupting your EHR",
                  "Discuss implementation timeline and ROI projections"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">✅</span> Next Steps After Your Call:
              </h2>
              <ul className="space-y-4">
                {[
                  "Receive a customized revenue protection plan for your practice",
                  "Get a clear implementation timeline that works for your team",
                  "Start protecting your revenue with zero disruption to your workflow"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
