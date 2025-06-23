'use client'

import { useEffect, useState, useRef } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function LossCalculator() {
  const [appointmentsPerYear, setAppointmentsPerYear] = useState(100)
  const [cancellationRate, setCancellationRate] = useState(14)
  const [patientLTV, setPatientLTV] = useState(3000)
  const [percentNeverReturn, setPercentNeverReturn] = useState(25)
  const methodologyRef = useRef<HTMLDetailsElement>(null)

  const handleMethodologyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    methodologyRef.current?.setAttribute('open', 'true')
    document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Cancellation rate options
  const cancellationRateOptions = [
    { value: 10, label: '10%' },
    { value: 14, label: '14% (Industry Standard)' },
    { value: 15, label: '15%' },
    { value: 20, label: '20%' },
    { value: 30, label: '30%' },
    { value: 40, label: '40%' },
    { value: 50, label: '50%' },
    { value: 60, label: '60%' },
    { value: 70, label: '70%' },
    { value: 80, label: '80%' },
    { value: 90, label: '90%' },
  ]

  // Never return options
  const neverReturnOptions = [
    { value: 10, label: 'A Few (10%)' },
    { value: 25, label: 'Some (25%)' },
    { value: 50, label: 'About half (50%)' },
    { value: 75, label: 'Most (75%)' },
    { value: 95, label: 'Almost all (95%)' },
  ]
  
  // Add custom styles for the range inputs
  const rangeInputStyles = `
    [type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #047857;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    [type='range']::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #047857;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `

  // Calculate annual revenue lost
  const calculateAnnualRevenueLost = () => {
    const yearlyAppointments = appointmentsPerYear
    const cancelRate = cancellationRate / 100
    const neverReturn = percentNeverReturn / 100
    
    const annualRevenue = yearlyAppointments * cancelRate * patientLTV * neverReturn

    return Number(annualRevenue).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  // Calculate industry standard (14% MGMA average no-show rate)
  const calculateIndustryStandard = () => {
    const yearlyAppointments = appointmentsPerYear
    const industryRate = 0.14 // 14% MGMA average no-show rate
    const neverReturn = percentNeverReturn / 100
    
    const annualRevenue = yearlyAppointments * industryRate * patientLTV * neverReturn

    return Number(annualRevenue).toLocaleString(undefined, {
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
              Calculate Revenue Lost to Cancellations
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Discover the hidden financial cost of appointment cancellations and patient drop-off in your clinic — and what it could be costing you each year.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-700 mb-4">
                In personal injury, recovery, and mental health care, <span className="font-semibold">37–60% of canceled patients never return</span> for care.
              </p>
              <p className="text-gray-700">
                And while not specific to healthcare, Harvard Business Review shows that responding within <span className="font-semibold">5 minutes leads to 21× more qualified leads</span> — but after 30 minutes, they're <span className="font-semibold">10× less likely to respond</span> at all.
              </p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">ESTIMATE YOUR ANNUAL REVENUE LOSS</h2>
            
            {/* Slider Group */}
            <div className="space-y-8">
              {/* Appointments Per Month Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  How many new patients do you see per year?
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="1000"
                    value={appointmentsPerYear}
                    onChange={(e) => setAppointmentsPerYear(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-24">{appointmentsPerYear}</span>
                </div>
              </div>

              {/* Cancellation Rate Dropdown */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  What is your average cancellation rate?
                </label>
                <div className="flex items-center gap-4">
                  <select
                    value={cancellationRate}
                    onChange={(e) => setCancellationRate(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {cancellationRateOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  <a href="#methodology" onClick={handleMethodologyClick} className="text-emerald-700 hover:text-emerald-800 hover:underline">See where we get industry standard below ↓</a>
                </p>
              </div>

              {/* Patient LTV Input */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  What is your average remaining balance per patient?
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-lg">$</span>
                    </div>
                    <input
                      type="text"
                      value={patientLTV}
                      placeholder="2000"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value === '' || parseInt(value) >= 0) {
                          setPatientLTV(parseInt(value) || 0);
                        }
                      }}
                      className="w-full p-3 pl-7 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Every drop-off can mean $1K–$25K lost — even more in injury care. What's your estimate?
                </p>
              </div>

              {/* Percent Never Return Dropdown */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Of patients who cancel, how many never return?
                </label>
                <div className="flex items-center gap-4">
                  <select
                    value={percentNeverReturn}
                    onChange={(e) => setPercentNeverReturn(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {neverReturnOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-12 space-y-6">
              {/* User's Calculation */}
              <div className="p-6 bg-gray-900 rounded-xl text-white">
                <h3 className="text-xl mb-4">Your estimated remaining balance lost from patients who cancel and never return:</h3>
                <div className="text-5xl font-bold">
                  ${calculateAnnualRevenueLost()}
                </div>
                <p className="mt-4 text-gray-400">
                  Based on your {cancellationRate}% cancellation rate
                </p>
              </div>

              {/* Industry Standard Comparison */}
              <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
                <h3 className="text-xl mb-4 text-amber-800">Industry standard (14% cancel rate):</h3>
                <div className="text-5xl font-bold text-amber-700">
                  ${calculateIndustryStandard()}
                </div>
                {cancellationRate < 10 && (
                  <p className="mt-3 text-sm text-amber-800 bg-amber-100 p-3 rounded-lg">
                    ⚠️ If your estimate is well below industry benchmarks (14%), consider reviewing actual records for accuracy.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Methodology Explanation */}
          <div id="methodology" className="max-w-3xl mx-auto mt-8 scroll-mt-24">
            <details ref={methodologyRef} className="bg-white rounded-xl shadow-sm border border-gray-200 group">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-semibold hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="magnifying glass">🔍</span>
                  Why We Use 14% as a Conservative Cancellation Average
                </div>
                <svg 
                  className="w-6 h-6 transform transition-transform duration-200 group-open:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="mb-4">
                  Based on multiple credible multi-site studies, a <span className="font-semibold">14% cancellation rate is a conservative estimate across outpatient clinics — excluding no-shows</span>.
                </p>
                
                <p className="mb-6">
                  MGMA reports a <span className="font-semibold">5-7% no-show rate</span> across specialties — but does <span className="font-semibold">not report on cancellations</span>. The data below isolates <span className="font-semibold">cancellations</span> where possible.
                </p>

                {/* Study Data Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 text-left">Study</th>
                        <th className="border border-gray-200 p-3 text-left">Setting</th>
                        <th className="border border-gray-200 p-3 text-left">Combined Missed Rate</th>
                        <th className="border border-gray-200 p-3 text-left">No-Show Rate</th>
                        <th className="border border-gray-200 p-3 text-left">Isolated Cancellation Rate</th>
                        <th className="border border-gray-200 p-3 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-3">Delgado et al.</td>
                        <td className="border border-gray-200 p-3">Radiology outpatient centers</td>
                        <td className="border border-gray-200 p-3">23.8%</td>
                        <td className="border border-gray-200 p-3">~2%</td>
                        <td className="border border-gray-200 p-3">~21.8%</td>
                        <td className="border border-gray-200 p-3">Clearly separates no-shows vs. cancellations</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">Akhtar et al.</td>
                        <td className="border border-gray-200 p-3">Multi-site surgical centers</td>
                        <td className="border border-gray-200 p-3">13.3% (patient-canceled)</td>
                        <td className="border border-gray-200 p-3">Not applicable</td>
                        <td className="border border-gray-200 p-3">13.3%</td>
                        <td className="border border-gray-200 p-3">Focuses on patient-initiated cancellations only</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">PLOS One (Urban)</td>
                        <td className="border border-gray-200 p-3">Urban U.S. outpatient clinics</td>
                        <td className="border border-gray-200 p-3">20-27%</td>
                        <td className="border border-gray-200 p-3">Est. 5-7%</td>
                        <td className="border border-gray-200 p-3">~15-20%</td>
                        <td className="border border-gray-200 p-3">Combined missed rate with industry no-show deduction</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-3">ScienceDirect Meta-Review</td>
                        <td className="border border-gray-200 p-3">General outpatient clinics (systematic review)</td>
                        <td className="border border-gray-200 p-3">~15.2%</td>
                        <td className="border border-gray-200 p-3">~6%</td>
                        <td className="border border-gray-200 p-3">~9.2%</td>
                        <td className="border border-gray-200 p-3">Meta-analysis of general outpatient settings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Conclusion */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span role="img" aria-label="chain link">🔗</span>
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                  </div>
                  <p>
                    A conservative cancellation rate of <span className="font-semibold">~14%</span> (after excluding no-shows) is consistent with the most credible multi-site outpatient data.
                  </p>
                </div>
              </div>
            </details>
          </div>

          {/* Pain Points Section */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Cost of Cancellations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Lost immediate revenue from cancelled appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Long-term impact of patient churn</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Inefficient staff scheduling and resource allocation</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Automated appointment reminders and confirmations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Smart waitlist management for last-minute cancellations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">✓</span>
                  <span>Patient engagement tools to reduce churn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Reduce Cancellations?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our solution helps medical practices minimize cancellations and maximize patient retention. 
              Start recovering lost revenue today.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
            >
              Start Recovering Lost Revenue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 