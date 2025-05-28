"use client"

import { Palette, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ArtisanBeacon AI</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© 2025 ArtisanBeacon AI. Built for Hack With Gujarat.</p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/artisans" className="text-gray-400 hover:text-white transition-colors duration-200">
                Artisans
              </Link>
              <Link href="/team" className="text-gray-400 hover:text-white transition-colors duration-200">
                Team
              </Link>
              <a 
                href="https://github.com/yourusername/artisanbeaconai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
