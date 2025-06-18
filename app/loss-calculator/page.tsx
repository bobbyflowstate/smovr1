'use client'

import { useEffect, useState } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function LossCalculator() {
  const [afterHoursCalls, setAfterHoursCalls] = useState(0)
  const [closeRate, setCloseRate] = useState(0)
  const [revenuePerClient, setRevenuePerClient] = useState(0)
  
  // Add custom styles for the range inputs
  const rangeInputStyles = `
    [type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #047857; /* emerald-700 */
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    [type='range']::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #047857; /* emerald-700 */
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `

  // Calculate monthly revenue lost
  // Formula: (Daily calls * Close rate * Revenue per client * 30 days)
  const calculateMonthlyRevenueLost = () => {
    const monthlyLeads = afterHoursCalls * 30 // multiply by 30 days
    const closedLeads = monthlyLeads * (closeRate / 100)
    const monthlyRevenue = closedLeads * revenuePerClient
    return Number(monthlyRevenue).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{rangeInputStyles}</style>
      <Header showBackToHome={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Calculate Your Lost Revenue from Missed Leads
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Every missed after-hours call is a potential deal slipping through your fingers. 
              See exactly how much revenue you're losing and how LeadShield can help you recover it.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">HOW MUCH MONEY CAN YOU MAKE?</h2>
            
            {/* Slider Group */}
            <div className="space-y-8">
              {/* After Hours Calls Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  How many phone calls do you typically get after hours per day?
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="30"
                    value={afterHoursCalls}
                    onChange={(e) => setAfterHoursCalls(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-12">{afterHoursCalls}</span>
                </div>
              </div>

              {/* Close Rate Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  What is your average close rate per call (Percent)?
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-12">{closeRate}%</span>
                </div>
              </div>

              {/* Revenue Per Client Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  How much do you typically make per new client?
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="50000"
                    value={revenuePerClient}
                    onChange={(e) => setRevenuePerClient(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-32">${revenuePerClient.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-12 p-6 bg-gray-900 rounded-xl text-white">
              <h3 className="text-xl mb-4">Estimated monthly revenue lost:</h3>
              <div className="text-5xl font-bold">
                ${calculateMonthlyRevenueLost()}
              </div>
            </div>
          </div>

          {/* Pain Points Section */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Cost of Missed Calls</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Lost opportunities during peak interest moments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Leads going to more responsive competitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Wasted marketing spend on leads that never connect</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">The LeadShield Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>24/7 lead capture and qualification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Instant response to every inquiry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Automated appointment booking while you sleep</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Stop Losing Revenue?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              LeadShield helps you capture and convert the leads you're currently missing. 
              Start recovering lost revenue today.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
            >
              See LeadShield in Action
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 