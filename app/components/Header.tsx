import Link from "next/link"
import Image from 'next/image'

interface HeaderProps {
  showBackToHome?: boolean;
}

export default function Header({ showBackToHome = false }: HeaderProps) {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="LeadShield Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        {!showBackToHome ? (
          <>
            <div className="hidden md:flex items-center space-x-8">
              {/* <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-700 hover:text-gray-900"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-gray-900"
              >
                Pricing
              </button>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 hover:text-gray-900"
              >
                FAQ
              </button> */}
            </div>
            <div>
              <Link 
                href="/loss-calculator"
                className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Calculate Annual Revenue Lost
              </Link>
            </div>
          </>
        ) : (
          <div>
            <Link 
              href="/"
              className="bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 