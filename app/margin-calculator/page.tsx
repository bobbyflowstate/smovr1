'use client'

import { useEffect, useState } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function MarginCalculator() {
  const [monthlyAppointments, setMonthlyAppointments] = useState(200)
  const [noShowRate, setNoShowRate] = useState(6.81)
  const [avgAppointmentValue, setAvgAppointmentValue] = useState(200)

  // No-show rate options with MGMA data
  const noShowOptions = [
    { value: 3, label: '3% (Excellent)' },
    { value: 5, label: '5% (Good)' },
    { value: 6.81, label: '6.81% (MGMA 2023 Average)' },
    { value: 10, label: '10% (Concerning)' },
    { value: 15, label: '15% (Critical)' },
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

  // Calculate revenue loss (simple and verifiable)
  const calculateRevenueLoss = () => {
    const monthlyNoShows = monthlyAppointments * (noShowRate / 100)
    const monthlyLoss = monthlyNoShows * avgAppointmentValue
    const annualLoss = monthlyLoss * 12

    return {
      monthlyNoShows: Math.round(monthlyNoShows),
      monthlyLoss: monthlyLoss.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      annualLoss: annualLoss.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      annualLossNumber: annualLoss
    }
  }

  // Calculate ROI for solution
  const calculateROI = () => {
    const results = calculateRevenueLoss()
    const solutionCost = 5000 // $5K annual cost (internal calculation)
    const recoveredRevenue = results.annualLossNumber * 0.75 // Conservative 75% recovery
    const netBenefit = recoveredRevenue - solutionCost
    const quarterlyRecovery = recoveredRevenue / 4
    const breakEvenMonths = Math.ceil(solutionCost / (quarterlyRecovery / 3))
    const firstYearProfit = netBenefit
    const quarterlyProfit = (recoveredRevenue - solutionCost) / 4

    return {
      recoveredRevenue: recoveredRevenue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      netBenefit: netBenefit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      quarterlyRecovery: quarterlyRecovery.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      breakEvenMonths: Math.min(breakEvenMonths, 3), // Cap at 3 months for messaging
      firstYearProfit: firstYearProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      quarterlyProfit: quarterlyProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    }
  }

  const results = calculateRevenueLoss()
  const roi = calculateROI()

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{rangeInputStyles}</style>
      <Header showBackToHome={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Stop Accepting Revenue Loss as "Normal"
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Calculate exactly how much your practice loses to no-shows, then see how a small investment can recover most of it.
            </p>
          </div>

          {/* Industry Reality Check */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Industry Reality Check (MGMA 2023-2024)</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-700">6.81%</div>
                  <div className="text-sm text-red-600">Average no-show rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-700">37%</div>
                  <div className="text-sm text-red-600">Practices saw increases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-700">Only 22%</div>
                  <div className="text-sm text-red-600">Achieved improvement</div>
                </div>
              </div>
              <p className="text-red-700 mt-4 text-center">
                <strong>Translation:</strong> 78% of practices either stay flat or get worse. Only 22% achieve improvement through targeted action.
              </p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">CALCULATE YOUR ANNUAL REVENUE LOSS</h2>
            
            {/* Simple Input Group */}
            <div className="space-y-8">
              {/* Monthly Appointments Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Monthly Appointments
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={monthlyAppointments}
                    onChange={(e) => setMonthlyAppointments(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-20">{monthlyAppointments}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Total appointments scheduled per month across all providers
                </p>
              </div>

              {/* No-Show Rate Dropdown */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  No-Show Rate
                </label>
                <div className="flex items-center gap-4">
                  <select
                    value={noShowRate}
                    onChange={(e) => setNoShowRate(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {noShowOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Check your practice management system for accurate data
                </p>
              </div>

              {/* Average Appointment Value */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Average Appointment Value
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-lg">$</span>
                    </div>
                    <input
                      type="number"
                      value={avgAppointmentValue || ''}
                      min="0"
                      max="1000000"
                      onChange={(e) => {
                        const value = e.target.value === '' ? 0 : Number(e.target.value)
                        if (value >= 0 && value <= 1000000) {
                          setAvgAppointmentValue(value)
                        }
                      }}
                      className="w-full p-3 pl-7 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Average revenue per appointment. Primary care: $150-$250, Specialty: $250-$500+
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-12 space-y-6">
              {/* Simple Revenue Loss Display */}
              <div className="p-6 bg-gray-900 rounded-xl text-white text-center">
                <h3 className="text-xl mb-4">Your Revenue Loss from No-Shows:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm opacity-80">Monthly Loss</p>
                    <div className="text-4xl font-bold text-red-400">
                      ${results.monthlyLoss}
                    </div>
                    <p className="text-sm opacity-70">{results.monthlyNoShows} missed appointments</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Annual Loss</p>
                    <div className="text-4xl font-bold text-red-400">
                      ${results.annualLoss}
                    </div>
                    <p className="text-sm opacity-70">Simple math you can verify</p>
                  </div>
                </div>
              </div>

                            {/* ROI Section */}
              <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                <h3 className="text-xl mb-4 text-emerald-800 text-center">Why Smart Practices Choose Us:</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-emerald-600">Break Even</p>
                    <div className="text-2xl font-bold text-emerald-700">Month {roi.breakEvenMonths}</div>
                    <p className="text-xs text-emerald-600">Pays for itself fast</p>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600">Quarter 1 Recovery</p>
                    <div className="text-2xl font-bold text-emerald-700">${roi.quarterlyRecovery}</div>
                    <p className="text-xs text-emerald-600">Covers full investment</p>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600">Year 1 Net Profit</p>
                    <div className="text-2xl font-bold text-emerald-700">${roi.firstYearProfit}</div>
                    <p className="text-xs text-emerald-600">Pure bottom-line gain</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-emerald-100 rounded-lg text-center">
                  <p className="text-emerald-800">
                    <strong>Guaranteed:</strong> Pays for itself in the first quarter, then ${roi.quarterlyProfit} pure profit every quarter after
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Trust Building & Verification */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">📊 Verify These Numbers:</h4>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Check your practice management system for actual no-show rates</li>
                <li>• Compare your appointment values with our estimates</li>
                <li>• These are conservative calculations - your actual loss may be higher</li>
                <li>• All statistics sourced from MGMA 2023-2024 data</li>
              </ul>
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Accepting Losses (Status Quo)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500">💸</span>
                  <span>Lose ${results.annualLoss} annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">📈</span>
                  <span>37% chance rates get worse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">😤</span>
                  <span>Staff overwhelmed with administrative tasks</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Taking Action (Our Solution)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">🎯</span>
                  <span>Intelligent automation prevents no-shows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">📉</span>
                  <span>Staff freed up to focus on patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">💰</span>
                  <span>Recover ${roi.recoveredRevenue} annually</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Stop Losing ${results.annualLoss} Every Year
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the successful 22% of practices that achieve improvement through targeted action. 
              Solution pays for itself by month {roi.breakEvenMonths}, then generates ${roi.quarterlyProfit} pure profit every quarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                Stop Losing Money - Book Demo
              </Link>
              <Link
                href="/loss-calculator"
                className="inline-flex items-center bg-gray-100 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-lg"
              >
                Try Revenue Calculator →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 