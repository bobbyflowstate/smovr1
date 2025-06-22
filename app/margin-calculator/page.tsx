'use client'

import { useEffect, useState } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function MarginCalculator() {
  const [annualRevenue, setAnnualRevenue] = useState(2000000)
  const [profitMargin, setProfitMargin] = useState(3)
  const [noShowRate, setNoShowRate] = useState(7)
  const [costIncrease, setCostIncrease] = useState(7.6)
  const [avgAppointmentValue, setAvgAppointmentValue] = useState(200)

  // Profit margin options
  const marginOptions = [
    { value: 1, label: '1% (Struggling)' },
    { value: 3, label: '3% (Industry Median)' },
    { value: 5, label: '5% (Healthy)' },
    { value: 8, label: '8% (Strong)' },
    { value: 10, label: '10% (Excellent)' },
  ]

  // No-show rate options
  const noShowOptions = [
    { value: 3, label: '3%' },
    { value: 5, label: '5%' },
    { value: 7, label: '7% (MGMA Average)' },
    { value: 10, label: '10%' },
    { value: 15, label: '15%' },
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

  // Calculate margin erosion impact
  const calculateMarginImpact = () => {
    const currentProfit = annualRevenue * (profitMargin / 100)
    const currentCosts = annualRevenue * (1 - profitMargin / 100)
    
    // Revenue lost to no-shows (assuming each no-show costs avg appointment value)
    const appointmentsPerYear = Math.round(annualRevenue / avgAppointmentValue)
    const noShowsPerYear = appointmentsPerYear * (noShowRate / 100)
    const revenueLostToNoShows = noShowsPerYear * avgAppointmentValue
    
    // New costs from increase
    const newCosts = currentCosts * (1 + costIncrease / 100)
    const newRevenue = annualRevenue - revenueLostToNoShows
    
    // New effective margin
    const newProfit = newRevenue - newCosts
    const newEffectiveMargin = newProfit > 0 ? (newProfit / newRevenue) * 100 : (newProfit / newRevenue) * 100
    
    const marginChange = newEffectiveMargin - profitMargin
    const profitLoss = currentProfit - newProfit

    return {
      currentProfit: currentProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      newProfit: newProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      currentMargin: profitMargin,
      newMargin: newEffectiveMargin.toFixed(1),
      marginChange: marginChange.toFixed(1),
      profitLoss: profitLoss.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      revenueLost: revenueLostToNoShows.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      isNegativeMargin: newEffectiveMargin < 0
    }
  }

  // Calculate industry benchmark scenario
  const calculateIndustryBenchmark = () => {
    const benchmarkRevenue = annualRevenue
    const benchmarkMargin = 3 // Industry median "nearly zero"
    const benchmarkNoShowRate = 7 // MGMA average
    const benchmarkCostIncrease = 7.6 // MGMA data
    
    const currentProfit = benchmarkRevenue * (benchmarkMargin / 100)
    const currentCosts = benchmarkRevenue * (1 - benchmarkMargin / 100)
    
    const appointmentsPerYear = Math.round(benchmarkRevenue / avgAppointmentValue)
    const noShowsPerYear = appointmentsPerYear * (benchmarkNoShowRate / 100)
    const revenueLostToNoShows = noShowsPerYear * avgAppointmentValue
    
    const newCosts = currentCosts * (1 + benchmarkCostIncrease / 100)
    const newRevenue = benchmarkRevenue - revenueLostToNoShows
    
    const newProfit = newRevenue - newCosts
    const newEffectiveMargin = newProfit > 0 ? (newProfit / newRevenue) * 100 : (newProfit / newRevenue) * 100
    
    return {
      newMargin: newEffectiveMargin.toFixed(1),
      newProfit: newProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
      isNegativeMargin: newEffectiveMargin < 0
    }
  }

  const userResults = calculateMarginImpact()
  const benchmarkResults = calculateIndustryBenchmark()

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{rangeInputStyles}</style>
      <Header showBackToHome={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              No-Shows Don't Just Cost Revenue — They Destroy Margins
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              With 92% of practices facing 7.6% cost increases, every no-show pushes already-thin margins closer to zero. See the real impact on your practice's profitability.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
              <p className="text-red-800 mb-4 font-semibold">
                Reality Check: <span className="font-bold">92% of medical groups report rising operating expenses</span> while median practice profit margins are <span className="font-bold">"nearly zero"</span> (MGMA, 2024).
              </p>
              <p className="text-red-700">
                Operating costs increased 7.6% in 2022 alone. In this environment, no-shows don't just cost revenue — they can push profitable practices into losses.
              </p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">CALCULATE YOUR MARGIN EROSION</h2>
            
            {/* Input Group */}
            <div className="space-y-8">
              {/* Annual Revenue Slider */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Annual Practice Revenue
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="500000"
                    max="10000000"
                    step="100000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xl font-medium w-32">${(annualRevenue / 1000000).toFixed(1)}M</span>
                </div>
              </div>

              {/* Profit Margin Dropdown */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Current Profit Margin
                </label>
                <div className="flex items-center gap-4">
                  <select
                    value={profitMargin}
                    onChange={(e) => setProfitMargin(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {marginOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
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
              </div>

              {/* Cost Increase Input */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Annual Cost Increase (%)
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-full">
                    <input
                      type="number"
                      value={costIncrease}
                      step="0.1"
                      min="0"
                      max="20"
                      onChange={(e) => setCostIncrease(Number(e.target.value))}
                      className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">%</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  MGMA reports 7.6% average increase in 2022. 92% of practices report rising costs.
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
                      value={avgAppointmentValue}
                      min="50"
                      max="2000"
                      onChange={(e) => setAvgAppointmentValue(Number(e.target.value))}
                      className="w-full p-3 pl-7 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Average revenue per appointment. Varies by specialty and practice type.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-12 space-y-6">
              {/* User's Scenario */}
              <div className={`p-6 rounded-xl text-white ${userResults.isNegativeMargin ? 'bg-red-600' : 'bg-gray-900'}`}>
                <h3 className="text-xl mb-4">Your Practice Impact:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm opacity-80">Margin Change</p>
                    <div className="text-3xl font-bold">
                      {userResults.currentMargin}% → {userResults.newMargin}%
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Annual Profit Change</p>
                    <div className="text-3xl font-bold">
                      -${userResults.profitLoss}
                    </div>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  {userResults.isNegativeMargin ? 
                    '⚠️ Your practice would operate at a loss with these conditions.' :
                    `Revenue lost to no-shows: $${userResults.revenueLost} annually`
                  }
                </p>
              </div>

              {/* Industry Benchmark */}
              <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
                <h3 className="text-xl mb-4 text-amber-800">Industry Reality Check:</h3>
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  Industry median at 3% margin → {benchmarkResults.newMargin}%
                </div>
                <p className="text-amber-700 mb-3">
                  With MGMA average 7% no-show rate and 7.6% cost increases, median practices face serious margin pressure.
                </p>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <p className="text-sm text-amber-800">
                    📊 <strong>Key Facts:</strong> 92% of practices report rising costs • Median profit "nearly zero" • Average practice loses $150K to no-shows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points vs Solutions */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Margin Death Spiral</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500">📈</span>
                  <span>Operating costs rise 7.6% annually (MGMA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">📉</span>
                  <span>No-shows prevent revenue recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">💀</span>
                  <span>Thin margins turn into losses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500">🏥</span>
                  <span>Practice viability at risk</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Margin Protection Strategy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">🛡️</span>
                  <span>Intelligent no-show prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">⚡</span>
                  <span>Automated appointment optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">💰</span>
                  <span>Revenue recovery without extra staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500">📊</span>
                  <span>Protect margins in rising cost environment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Margins Before It's Too Late
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              In an environment where 92% of practices face rising costs and median profits are "nearly zero," 
              every no-show matters. Stop the margin erosion before it destroys your practice.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
            >
              Stop Losing Money to No-Shows
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 