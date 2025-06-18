import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A3B3B] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/demo" className="hover:text-white transition-colors">Listen to Demo</Link></li>
              <li><Link href="/book-demo" className="hover:text-white transition-colors">Book a Demo</Link></li>
              {/* {/* <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li> */}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal Links</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              {/* <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li> */}
              {/* <li><Link href="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link></li> */}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support & Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition-colors">Email Support</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Phone Support</Link></li>
              {/* <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li> */}
            </ul>
          </div>

          {/* Stay Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connect</h3>
            <ul className="space-y-2">
              <li><Link href="" className="hover:text-white transition-colors">Twitter (Coming Soon)</Link></li>
              {/* <li><Link href="https://instagram.com/leadshield" className="hover:text-white transition-colors">Instagram</Link></li> */}
              <li><Link href="" className="hover:text-white transition-colors">LinkedIn (Coming Soon)</Link></li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col space-y-2 text-sm">
            <p>LeadShield.xyz is a service operated by Kevin P. Stratmann, DBA SMOVR.</p>
            <p>Business Address: 253 Garth Road unit 5G Scarsdale NY 10583</p>
            <p>© 2025 Kevin P. Stratmann, DBA SMOVR. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 