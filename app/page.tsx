'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import Header from "@/app/components/Header"
import HomeA2P from "@/app/components/HomeA2P"

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
  // Check env var for A2P mode
  const showA2P = process.env.NEXT_PUBLIC_HOME_PAGE_A2P === 'true'
  
  // All hooks must be called unconditionally before any early returns
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (showA2P) return; // Skip effect when showing A2P page
    
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
  }, [showA2P]);

  useEffect(() => {
    if (showA2P) return; // Skip effect when showing A2P page
    
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
  }, [showA2P]);

  // Return A2P page after all hooks have been called
  if (showA2P) {
    return <HomeA2P />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-14">
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
              <h1 className="max-w-2xl text-5xl font-bold leading-tight mb-6 text-gray-900">
                Stop the daily firefighting caused by missed patient actions
              </h1>
              <div className="max-w-2xl mb-8">
                <p className="text-2xl md:text-3xl text-gray-800 leading-snug mb-3">
                  A real time patient follow up communication interface
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-5">
                  We manage patient communication so nothing falls through the cracks.
                </p>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-xl font-semibold text-gray-900">A patient cancels. Then what?</p>
                  <p className="text-lg text-gray-600 mt-1">Most systems stop there.</p>
                </div>
              </div>
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
      <section className="py-12 md:py-20 bg-[#f0faf5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg md:text-xl text-gray-700 mb-8 md:mb-10">
              This communication interface, called SMOVR, manages patient communication automatically.
            </p>
            {/* Section Label */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <div className="w-5 h-5 rounded-md flex items-center justify-center">
                  💸
                </div>
                <span className="text-sm font-medium text-gray-900">The Results</span>
              </div>
            </div>
            {/* Header Content */}
            <div className="mb-12 md:mb-20">
              <div className="flex justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center max-w-3xl">
                  Your front desk is firefighting. <span className="text-gray-600">This communication interface handles it before it hits them.</span>
                </h2>
              </div>
              
              <div className="text-xl md:text-2xl space-y-2 md:space-y-3 mb-8 md:mb-12 leading-snug md:leading-relaxed">
                <p>Cancellations. No-shows. "I'll rebook later."</p>
                <p>Patients running late or getting lost.</p>
              </div>

              <div className="text-xl md:text-2xl space-y-2 md:space-y-3 leading-snug md:leading-relaxed">
                <p>Most systems react <span className="font-bold">after</span> the damage is done.</p>
                <p>This communication interface catches the breakdowns <span className="font-bold italic">before</span> they spread — without needing access to your EHR.</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-12 md:mb-16">
              <div className="bg-white rounded-2xl border border-emerald-100 p-8 md:p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.16em] text-emerald-700 font-semibold mb-4">
                  Testimonial
                </p>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800">
                  "The system gives our team real-time visibility into patient communication and helps us stay ahead of missed appointments. It's simple, effective, and easy for our staff to use."
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">Arizona Integrated Medical</p>
                  <p className="text-gray-600">Arizona</p>
                </div>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="mb-12 md:mb-16 relative">
              {/* Headers */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-8">
                <div className="bg-gradient-to-br from-white to-red-50/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500/80 text-2xl">❌</span>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Before the interface
                    </h3>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500/80 text-2xl">✨</span>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                      After the interface
                    </h3>
                  </div>
                </div>
              </div>

              {/* Table of Comparisons */}
              <table className="w-full border-separate border-spacing-4 md:border-spacing-8">
                <tbody>
                  {[
                    {
                      before: '"I\'ll rebook later." → They vanish for months',
                      after: {
                        text: '"No problem — we\'ll remind you in 2 months." → They rebook automatically',
                        highlight: 'rebook automatically'
                      }
                    },
                    {
                      before: '"I\'m running late" → Staff scrambles or loses the slot',
                      after: {
                        text: 'The interface routes them automatically: reschedule, map, or call — no chaos',
                        highlight: 'reschedule, map, or call'
                      }
                    },
                    {
                      before: 'Patient gets lost → They miss the appointment',
                      after: {
                        text: 'Custom directions link sent instantly — they show up',
                        highlight: 'Custom directions link'
                      }
                    },
                    {
                      before: 'Staff forgets to log a reschedule → Calendar is wrong',
                      after: {
                        text: 'The interface logs it immediately — no errors, no stress',
                        highlight: 'no errors, no stress'
                      }
                    },
                    {
                      before: 'System "confirms" → Patient still no-shows',
                      after: {
                        text: 'The interface checks intent — confirms, reroutes, or recovers',
                        highlight: 'checks intent'
                      }
                    },
                    {
                      before: '5 PM: no idea who canceled or rescheduled',
                      after: {
                        text: 'The interface sends a daily digest — full visibility',
                        highlight: 'daily digest'
                      }
                    },
                    {
                      before: 'Staff re-enters everything manually',
                      after: {
                        text: 'The interface delivers a clean, end-of-day log for fast entry—no hunting for updates',
                        highlight: 'end-of-day log'
                      }
                    },
                    {
                      before: 'Gaps = lost revenue → Cancellations kill the schedule',
                      after: {
                        text: 'The interface reroutes cancellation into reschedule or call — in real-time',
                        highlight: 'reroutes cancellation into reschedule or call'
                      }
                    },
                    {
                      before: 'Front desk = overwhelmed + reactive',
                      after: {
                        text: 'This communication interface runs outside the EHR — handles issues before they hit the front desk',
                        highlight: ['outside the EHR', 'before']
                      }
                    }
                  ].map((pair, index) => (
                    <tr key={index}>
                      <td className="w-1/2">
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/60 hover:-translate-y-0.5">
                          <p className="text-lg md:text-xl leading-snug md:leading-relaxed">
                            {pair.before.split('→').map((part, i) => (
                              <span key={i} className={i === 0 ? 'text-gray-900' : 'text-red-700/90 ml-2'}>
                                {i === 1 && <span className="mx-2 opacity-50">→</span>}
                                {part}
                              </span>
                            ))}
                          </p>
                        </div>
                      </td>
                      <td className="w-1/2">
                        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/60 hover:-translate-y-0.5">
                          <p className="text-lg md:text-xl leading-snug md:leading-relaxed">
                            {pair.after.text.split(/( — |→)/).map((part: string, i: number) => {
                              if (part === ' — ' || part === '→') {
                                return <span key={i} className="mx-2 opacity-50">{part}</span>;
                              }
                              
                              const highlights = Array.isArray(pair.after.highlight) ? pair.after.highlight : [pair.after.highlight];
                              let textPart: React.ReactNode = part;
                              
                              highlights.forEach(highlight => {
                                if (typeof textPart === 'string') {
                                  const parts = textPart.split(highlight);
                                  if (parts.length > 1) {
                                    textPart = parts.reduce((acc: React.ReactNode, curr: string, idx: number) => {
                                      if (idx === 0) return curr;
                                      return <>{acc}<span className="font-bold">{highlight}</span>{curr}</>;
                                    }, '');
                                  }
                                }
                              });

                              return (
                                <span key={i} className={i === 0 ? 'text-gray-900' : 'text-emerald-700/90'}>
                                  {textPart}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Link
                href="/loss-calculator"
                className="inline-flex items-center bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 text-lg md:text-xl shadow-lg"
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

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built It Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold tracking-[0.14em] uppercase text-emerald-700 mb-3">
                Founder Story
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Why We Built It
              </h2>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-100 rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10">
                <p className="max-w-4xl text-xl md:text-2xl text-gray-800 leading-relaxed">
                  "A missed update and a long wait in a crowded office made something clear to me: the problem wasn't effort, it was outdated communication logic. If a clinic cannot quickly inform patients of changes, everyone pays the price. It was built to bring real-time visibility to scheduling and reduce unnecessary friction for both staff and patients."
                </p>
                <p className="mt-6 text-sm uppercase tracking-[0.14em] text-gray-500">
                  Kevin Stratmann
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
                  <span className="text-emerald-700">👮‍♂️</span>
                </div>
                <span className="text-sm font-medium text-gray-900">How It Works</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Your EHR isn't broken.<br/>It's a security guard.
            </h2>

            <div className="bg-white rounded-3xl p-12 shadow-sm relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl text-gray-900 mb-6">
                  ⛑️ Protecting privacy. Not patient flow.
                  </h3>

                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Almost all EHRs — from Epic down to Practice Fusion — were built to protect records, not keep patients efficiently cared for.
                  </p>
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Trying to manage real-time patient flow with them? It's like trying to pour milk from a water faucet. They weren't designed for it.
                  </p>

                  <h3 className="text-2xl text-gray-900 mb-6">
                    🛎️ SMOVR steps in like a concierge.
                  </h3>

                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    We quietly recover canceled visits, route late arrivals, and fill empty slots in real time.
                  </p>

                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">The result:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span className="text-xl">Revenue + efficiency — the business bottom line</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span className="text-xl">Patient trust + staff sanity — the heart and reputation of your clinic</span>
                      </li>
                    </ul>
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
                  a: "Not really. SMOVR becomes your live schedule, so patients can confirm or reschedule in real time without tying up your staff. During the day your team can keep working as they do now, and any updates to the EHR can be done later at their convenience. Just a simpler way to keep the day running smoothly."
                },
                {
                  q: "How is this deployed across multiple locations or specialties?",
                  a: "It's modular and scalable — from solo practices to national groups. Multi-location support and optional waitlist logic are built-in."
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
              <p className="text-gray-600">Complete this <a href="/book-demo" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">secure form</a> and we'll follow up confidentially.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
