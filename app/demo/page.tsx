'use client'

import { useRef, useState } from 'react'
import Header from "@/app/components/Header"
import Image from 'next/image'
import Link from 'next/link'

export default function Demo() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header showBackToHome={true} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="text-2xl">🎧</span>
                <span className="text-sm font-medium text-gray-900">Listen to a Demo</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Hear Joy in Action
              </h1>
              <p className="text-xl text-gray-600">
                This is a real example of Joy — your AI voice assistant — speaking with an inbound real estate lead. No scripts. No actors. Just a natural, helpful conversation that leads to a booked appointment.
              </p>
            </div>

            {/* Audio Player Section */}
            <div className="bg-emerald-50 rounded-3xl p-8 mb-12">
              <audio 
                ref={audioRef} 
                src="/audio/joy-demo.wav"
                onEnded={() => setIsPlaying(false)}
              />
              <div className="flex flex-col items-center">
                <button
                  onClick={togglePlayPause}
                  className="w-20 h-20 bg-emerald-700 rounded-full flex items-center justify-center mb-4 hover:bg-emerald-800 transition-colors"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <p className="text-sm text-gray-600">Playtime: 3 minutes | Real call with consent</p>
              </div>
            </div>

            {/* What You're Hearing Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What You're Hearing:
              </h2>
              <p className="text-gray-600 mb-6">
                This recording showcases how Joy:
              </p>
              <ul className="space-y-4">
                {[
                  "Picks up the phone and greets the lead warmly",
                  "Asks qualifying questions naturally",
                  "Schedules an appointment in real time"
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

            {/* Description */}
            <div className="mb-16">
              <p className="text-gray-600 text-lg">
                She sounds human because she's built to feel human — without pretending to be one. Joy is designed to reduce awkwardness and build trust fast, so your leads feel heard and cared for.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                👉 Ready to Try It?
              </h2>
              <p className="text-gray-600 mb-8">
                Let Joy handle your next real lead — today.<br />
                No setup required. Just enter your number and she'll call you like she would any other lead.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors duration-200 text-lg"
              >
                📞 Recover $10K+ in Lost Revenue Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 