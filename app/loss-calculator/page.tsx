'use client'

import { useEffect, useState } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function LossCalculator() {
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(100)
  const [cancellationRate, setCancellationRate] = useState(15)
  const [patientLTV, setPatientLTV] = useState(3000)
  const [percentNeverReturn, setPercentNeverReturn] = useState(25)

  // Cancellation rate options
  const cancellationRateOptions = [
    { value: 5, label: '5%' },
    { value: 10, label: '10%' },
    { value: 15, label: '15%' },
    { value: 20, label: '20%' },
    { value: 25, label: '25%' },
    { value: 30, label: '30%' },
    { value: 35, label: '35%' },
    { value: 40, label: '40%' },
  ]

  // Never return options
  const neverReturnOptions = [
    { value: 10, label: 'Almost never (10%)' },
    { value: 25, label: 'Sometimes (25%)' },
    { value: 50, label: 'About half (50%)' },
    { value: 75, label: 'Most (75%)' },
    { value: 95, label: 'Almost always (95%)' },
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
  // New formula: (monthly_appointments × cancellation_rate × patient_LTV × never_return_rate × 12 months)
  const calculateAnnualRevenueLost = () => {
    const monthlyAppointments = appointmentsPerMonth
    const cancelRate = cancellationRate / 100
    const neverReturn = percentNeverReturn / 100
    
    const annualRevenue = monthlyAppointments * cancelRate * patientLTV * neverReturn * 12

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
              Understand the true financial impact of appointment cancellations and patient churn on your medical practice
            </p>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">ESTIMATE YOUR ANNUAL REVENUE LOSS</h2>
            
            {/* Slider Group */}
            <div className="space-y-8">
              {/* Appointments Per Month Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  How many appointments do you schedule per month?
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="300"
                    value={appointmentsPerMonth}
                    onChange={(e) => setAppointmentsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-24">{appointmentsPerMonth}</span>
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
              </div>

              {/* Patient LTV Input */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  What is your average patient lifetime value?
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
                  If unsure: most clinics fall between $1,500–$5,000. For PI cases: $20K+.
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
            <div className="mt-12 p-6 bg-gray-900 rounded-xl text-white">
              <h3 className="text-xl mb-4">Total lifetime value lost from patients who cancel and never return:</h3>
              <div className="text-5xl font-bold">
                ${calculateAnnualRevenueLost()}
              </div>
              <p className="mt-4 text-gray-400">
                This represents the total future revenue you'll lose from patients who cancel and never return to your practice over the course of a year.
              </p>
            </div>
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
              href="/demo"
              className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 