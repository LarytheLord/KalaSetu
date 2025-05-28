"use client"

import { useState } from "react"
import { Menu, X, Palette, Github } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
              ArtisanBeacon AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Features
            </Link>
            <Link
              href="/artisans"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Explore Artisans
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Team
            </Link>
            <a
              href="https://github.com/yourusername/artisanbeaconai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4">
            <Link
              href="/#features"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/artisans"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Artisans
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <a
              href="https://github.com/yourusername/artisanbeaconai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
