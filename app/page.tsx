"use client"

import { useState } from "react"
import { Menu, X, Palette, Users, MapPin, Github, ExternalLink, Play } from "lucide-react"

export default function KalaSetuLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                KalaSetu
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                Features
              </a>
              <a href="#demo" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                Demo
              </a>
              <a href="#team" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                Team
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100">
              <div className="flex flex-col space-y-3">
                <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                  Features
                </a>
                <a href="#demo" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                  Demo
                </a>
                <a href="#team" className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                  Team
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Gujarat's{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Artisanal Soul
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting art lovers with Gujarat's hidden artisans through the power of AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Explore Art
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 px-8 py-4 border border-gray-300 rounded-xl hover:border-orange-300">
                <Github className="w-5 h-5" />
                <span className="font-semibold">View on GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Makes KalaSetu Awesome?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between traditional craftsmanship and modern technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Art Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload an image of a craft, and our AI identifies the style and suggests relevant Gujarati artisans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artisan Showcase</h3>
              <p className="text-gray-600 leading-relaxed">
                A dedicated platform for artisans to display their work, share their stories, and connect with buyers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Artisan Map</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore and locate artisans across Gujarat, discovering unique crafts region by region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solved Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Bridging the Gap Between Artisans and Art Enthusiasts
          </h2>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Many talented Gujarati artisans struggle with visibility, while buyers find it hard to discover authentic
            local crafts. KalaSetu uses AI to connect them directly, promoting cultural heritage and economic
            empowerment for these skilled individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Ready to Discover Authentic Craftsmanship?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Play className="w-5 h-5" />
              <span>Watch Video Demo</span>
            </button>
            <button className="flex items-center justify-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 px-8 py-4 border border-gray-300 rounded-xl hover:border-orange-300">
              <ExternalLink className="w-5 h-5" />
              <span>Visit GitHub Repository</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">KalaSetu</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 KalaSetu. Built for Hack With Gujarat.</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
