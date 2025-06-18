'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import Header from "@/app/components/Header"

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Image
                  src="/app-icon.svg"
                  alt="LeadShield App Icon"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <h1 className="text-4xl font-bold leading-tight mb-6 text-gray-900">
              One Missed Appointment is $300K+ Lost.<br/><span className="text-red-500"> 6/10 Patients Never Reschedule.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              Medical practices lose hundreds of thousands in revenue when patients no-show — especially for high-value procedures. We stop the leak with intelligent rescheduling automation that works with your existing systems. No extra staff needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/loss-calculator"
                  className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg flex items-center"
                >
                  Calculate Your Loss in 10s 📊
                </Link>
                <Link
                  href="/book-demo"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 text-lg flex items-center"
                >
                Stop the Revenue Leak
                </Link>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recover 6 Figures in Lost Revenue</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works With Your Existing EHR</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set up in minutes. No IT headaches.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-8">
                <Image
                  src="/images/leadshield-heropain2.png"
                  alt="LeadShield Dashboard Preview"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadflow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Your Staff is Already Overwhelmed
              </h2>
              <p className="text-xl text-gray-600">
                We automate patient rescheduling without changing your EHR or adding staff. <span className="font-bold">Set up takes minutes.</span>
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/leadflow3.png"
                alt="LeadShield Lead Flow Process"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 text-lg md:text-2xl shadow-lg"
              >
                Recover $10K+ in Revenue Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl shadow-2xl">
                <div className="relative bg-emerald-900 rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/images/leadshield-joy1.png"
                    alt="Joy AI Assistant"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-900">
                Meet Joy — Your Lead Shield in Action
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience how Joy qualifies, engages, and books real estate leads in English and Spanish. Hear her in action and see why top agents rely on her to protect their time and grow their business.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                👉 Listen to a Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Backstory Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full shadow-sm">
                <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                  <span className="text-emerald-700">✨</span>
                </div>
                <span className="text-sm font-medium text-gray-900">Our Story</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-900">
              Your Human Partner in Navigating The Future
            </h2>

            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Small businesses are drowning in missed calls, cold leads, and tech they don't have time to learn. We built LeadShield to change that — to give business owners their time back, help them close more deals, and free them to build the life they actually want: more freedom, more joy, more control.
                </p>

                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/images/kevin-profile.jpg"
                      alt="Kevin - Founder"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      I'm Kevin — author of Shift Success AI. After decades of guiding people and teams through personal transformation, I partnered with <a href="https://about.me/ashokraju" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Ashok Kidraj, a seasoned software engineer</a>, to build tools that combine voice AI with emotional intelligence.
                    </p>
                  </div>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Together, we created an assistant that:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {["Qualifies leads", "Books appointments", "Runs 24/7", "Sounds warm, human, and real"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-emerald-700">✔️</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xl text-gray-700 italic">
                  It's automation designed for people doing meaningful work — who still care how they show up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Features Label */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Benefits</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Why Medical Practices Trust Our Solution
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits List */}
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <div className="space-y-12">
                {[
                  "Recovers $300K+ in lost revenue annually",
                  "Automated rescheduling that works 24/7",
                  "Seamless integration with your existing EHR",
                  "No technical complexity. Fully managed setup in minutes with dedicated support",
                  "Multi-language patient communication",
                  "Direct integration with your scheduling system",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-gray-400 text-lg font-medium">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full">
              <div className="rounded-3xl overflow-hidden border-8 border-[#065f46] bg-[#E8FAE5]">
                <div className="relative aspect-square">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/leadshield-client2.png"
                      alt="LeadShield Dashboard Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Start Recovering Lost Revenue Today
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We'll integrate with your EHR and start recovering missed appointments — with no upfront fees or long-term commitment. You only pay once we prove the value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Benefits */}
              <div className="bg-white rounded-3xl p-10 shadow-sm">
                <div className="space-y-6">
                  {[
                    "No upfront payment - setup costs billed after proven results",
                    "HIPAA-compliant integration with your EHR",
                    "No long-term contracts required",
                    "Fully customized to your practice workflow",
                    "Multi-language patient communication included",
                    "Flexible upgrades as your practice grows"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 h-full">
                  {/* Price Tag Element */}
                  <div className="absolute -top-6 right-8 bg-white rounded-2xl px-6 py-4 shadow-lg transform rotate-3">
                    <div className="text-4xl font-bold text-emerald-700">$0</div>
                    <div className="text-sm text-gray-600">Upfront Cost</div>
                  </div>

                  {/* Success Path Illustration */}
                  <div className="relative h-full flex flex-col justify-center items-center">
                    {/* Path Steps */}
                    {[
                      { icon: "🎯", text: "Setup" },
                      { icon: "🤝", text: "Integration" },
                      { icon: "✨", text: "Results" },
                      { icon: "💰", text: "Pay" }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center mb-8 last:mb-0 relative">
                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                        <div className="ml-4 text-lg font-medium text-gray-800">{step.text}</div>
                        {index < 3 && (
                          <div className="absolute top-full left-8 w-0.5 h-8 bg-emerald-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-100 rounded-full -z-10"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Link
                href="/demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                👉 Listen to a Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                  <span className="text-emerald-700 text-sm">🤔</span>
                </div>
                <span className="text-sm font-medium text-gray-900">FAQ</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 text-center">
              Frequently Asked Questions
            </h2>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "Is this HIPAA compliant?",
                  a: "Yes, our solution is fully HIPAA compliant and we sign BAAs with all healthcare providers."
                },
                {
                  q: "Which EHR systems do you support?",
                  a: "We integrate with all major EHR systems including Epic, Cerner, Athena, and more. Our setup team handles all the technical details."
                },
                {
                  q: "How quickly can we get started?",
                  a: "Most practices are up and running within 24-48 hours. We handle all the setup and integration work."
                },
                {
                  q: "What's the ROI?",
                  a: "Most practices see 10-20x ROI within the first month. Use our calculator to see your potential returns based on your specific numbers."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-700 font-medium">Q{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 text-lg shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}