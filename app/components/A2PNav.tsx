'use client'

import Link from "next/link"
import Image from 'next/image'

interface A2PNavProps {
  showContactLink?: boolean
}

export default function A2PNav({ showContactLink = true }: A2PNavProps) {
  return (
    <nav className="bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="SMOVR Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </Link>
          {showContactLink && (
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
