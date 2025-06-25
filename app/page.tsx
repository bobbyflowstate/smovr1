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
              <div className="mb-2">
                <Image
                  src="/app-icon.svg"
                  alt="SMOVR App Icon"
                  width={80}
                  height={80}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-900">
              <br/>A $4M clinic <span className="text-red-500">may lose $200,000 a year</span> from canceled visits.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                MGMA reports 5–7% no-shows — but what about the 14% who cancel and never return?<br/>
                <span className="text-red-500">The numbers don't lie.</span> Most staff never see it. Optimistic reporting buries it. <Link href="/loss-calculator" className="text-emerald-700 hover:text-emerald-800 hover:underline">Our calculator exposes it</Link>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/loss-calculator"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 text-lg flex items-center"
                >
                  Estimate Your Loss
                </Link>
                <Link
                  href="/book-demo"
                  className="bg-emerald-700 text-white px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 text-lg flex items-center"
                >
                👉 Stop the Revenue Leak
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
                  <span>Setup takes 2-3 weeks depending on A2P timing.</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We custom-fit your logic - no EHR disruption.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="p-8">
                <Image
                  src="/images/empty-seats3.png"
                  alt="SMOVR Dashboard Preview"
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
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Your Staff Can't Chase Every Cancellation
              </h2>
              <p className="text-xl text-gray-600">
                Think of us like an ambulance outside the hospital. We don't enter the clinical system — we stabilize the chaos before it turns into lost revenue.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/flowchart2.png"
                alt="SMOVR Lead Flow Process"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="flex justify-center pt-8">
              <p className="text-xl text-gray-600 mt-4">
                This is the "AFLAC of rescheduling" — a smart logic layer that protects your revenue the moment something breaks. No PHI. No AI chat. Just fast, compliant action where your EHR can't go.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/loss-calculator"
                className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 text-lg md:text-2xl shadow-lg"
              >
                Calculate Your Loss 💸
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 bg-red-50 rounded-md flex items-center justify-center">
                  <span className="text-red-700">⚠️</span>
                </div>
                <span className="text-sm font-medium text-gray-900">Industry Challenges</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              What's Going Wrong<br/>
              <span className="text-gray-600">(And Why You're Not Alone)</span>
            </h2>

            <div className="bg-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-50 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 space-y-6">
                {[
                  "Clinics lose 10–14% of revenue from missed or unfilled appointments",
                  "Legacy systems like Epic and Athena don't adapt when things change",
                  "Most platforms require manual rescheduling — or none at all",
                  "Compliance fears keep teams frozen, even when logic-based solutions exist",
                  "40–60% of canceled patients never return without immediate action"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{point}</p>
                  </div>
                ))}

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-xl text-emerald-700 font-medium text-center">
                    We don't replace your system. We protect it from leaking money — with zero PHI exposure.
                  </p>
                </div>
              </div>
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
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/images/kevin-profile.jpg"
                      alt="Kevin Stratmann - Founder"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Kevin Stratmann is a creative systems thinker and author of Shift Success with AI. He partnered with <a href="https://about.me/ashokraju" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">Ashok, a former software founder with several startup exits (Google, Dropbox)</a>, to build what major EHRs missed:
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 mb-8">
                  <p className="text-xl text-emerald-700 font-medium">
                    ➡️ A lightweight, outside-the-firewall automation layer that protects revenue without disrupting clinical systems.
                  </p>
                </div>

                <p className="text-xl text-gray-700 italic">
                  "They're not selling hype. They're solving real scheduling breakdowns — with tools that work where legacy systems can't."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                  <span className="text-emerald-700">💡</span>
                </div>
                <span className="text-sm font-medium text-gray-900">How It Works</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              The Logic Layer That Solves<br/>the Real Problem
            </h2>

            <div className="bg-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Most EHR systems — Epic, Athena, Health Gorilla — were built to protect data, not adapt in real time. They don't reschedule. They don't reallocate. They don't fill gaps.
                  </p>
                  
                  <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                    That's where our platform comes in. It runs quietly outside your EHR — detecting breakdowns, filling empty appointments, and recovering lost revenue without PHI access or workflow disruption.
                  </p>

                  <div className="flex items-center justify-center gap-3 text-xl text-emerald-700">
                    <span>Want exact technical details? See our most common questions below</span>
                    <span className="text-2xl">👇</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 bg-[#E8FAE5] rounded-md flex items-center justify-center">
                  <span className="text-emerald-700">❓</span>
                </div>
                <span className="text-sm font-medium text-gray-900">FAQ</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do you need access to our EHR or clinical data?",
                  a: "No. Our system runs fully outside your EHR. The platform connects to scheduling logic only — never PHI — keeping your compliance posture fully intact."
                },
                {
                  q: "Will our staff need to change how they work?",
                  a: "Not at all. Once configured, the system runs in the background — auto-reallocating openings and reducing no-shows. No new portals. No new steps."
                },
                {
                  q: "How is this deployed across multiple locations or specialties?",
                  a: "It's modular and scalable — from solo practices to national groups. Multi-location support and optional waitlist logic are built-in."
                },
                {
                  q: "What about SMS compliance?",
                  a: "Already using reminders? You're likely pre-approved. If not, we guide your team through A2P registration during onboarding to ensure compliant delivery from day one."
                },
                {
                  q: "How is pricing handled?",
                  a: "Pricing depends on your practice complexity, patient volume, and scheduling logic. Because this system directly protects revenue, it's designed to deliver ROI that far exceeds its cost. We'll share clear terms after a brief discovery — and only move forward if the value is unmistakable."
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
              <p className="text-gray-600">Complete the secure form below and we'll follow up confidentially.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}