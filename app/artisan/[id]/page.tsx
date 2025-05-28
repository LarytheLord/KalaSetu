"use client"

import { useState } from "react"
import { MapPin, Star, Mail, Phone, Award, Calendar, Heart, Share2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock artisan data
const mockArtisan = {
  id: 1,
  name: "Ramesh Vankar",
  specialty: "Keeper of the Patan Patola Flame",
  location: "Patan, Mehsana District, Gujarat",
  rating: 4.9,
  reviewCount: 127,
  profileImage: "/placeholder.svg?height=400&width=400",
  coverImage: "/placeholder.svg?height=600&width=1200",
  bio: "Ramesh Vankar represents the seventh generation of his family to practice the ancient art of Patan Patola weaving. Born and raised in the historic town of Patan, he has dedicated his life to preserving this UNESCO-recognized craft that dates back over 700 years. His intricate double ikat silk sarees are treasured by collectors worldwide, each piece taking 4-6 months to complete using traditional techniques passed down through generations.",
  experience: "35+ years",
  specialties: ["Double Ikat Weaving", "Natural Dye Preparation", "Traditional Loom Operation"],
  achievements: [
    "National Award for Master Craftsperson (2018)",
    "Gujarat State Award for Traditional Arts (2015)",
    "Featured in National Geographic Documentary (2020)",
  ],
  gallery: [
    { id: 1, image: "/placeholder.svg?height=400&width=400", title: "Traditional Patola Saree", price: "₹2,50,000" },
    { id: 2, image: "/placeholder.svg?height=400&width=400", title: "Geometric Pattern Dupatta", price: "₹45,000" },
    { id: 3, image: "/placeholder.svg?height=400&width=400", title: "Bridal Collection Saree", price: "₹4,00,000" },
    { id: 4, image: "/placeholder.svg?height=400&width=400", title: "Contemporary Patola Stole", price: "₹25,000" },
    { id: 5, image: "/placeholder.svg?height=400&width=400", title: "Heritage Design Saree", price: "₹3,20,000" },
    { id: 6, image: "/placeholder.svg?height=400&width=400", title: "Festival Special Collection", price: "₹1,80,000" },
  ],
}

export default function ArtisanProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Back Navigation */}
      <Navbar />

      {/* Profile Hero Section */}
      <div className="relative">
        <div className="h-64 sm:h-80 bg-gradient-to-r from-orange-400 to-teal-500 relative overflow-hidden">
          <img
            src={mockArtisan.coverImage || "/placeholder.svg"}
            alt="Artisan workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-teal-500/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-20 sm:-mt-24">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={mockArtisan.profileImage || "/placeholder.svg"}
                    alt={mockArtisan.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{mockArtisan.name}</h1>
                      <p className="text-xl text-orange-600 font-medium mb-2">{mockArtisan.specialty}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{mockArtisan.location}</span>
                      </div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-medium">{mockArtisan.rating}</span>
                          <span className="text-gray-500">({mockArtisan.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-600">{mockArtisan.experience} experience</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="p-3 border border-gray-300 rounded-xl hover:border-orange-300 transition-colors duration-200">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-3 border border-gray-300 rounded-xl hover:border-orange-300 transition-colors duration-200">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Contact Artisan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Bio and Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Heritage, Our Hands</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{mockArtisan.bio}</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                  <ul className="space-y-2">
                    {mockArtisan.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {mockArtisan.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Their Masterpieces</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockArtisan.gallery.map((item) => (
                  <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedImage(item)}>
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-3 group-hover:shadow-lg transition-shadow duration-200">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-orange-600 font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">ramesh.vankar@email.com</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-600">+91 98765 43210</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200">
                Send Message
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workshop Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Interactive Map Placeholder
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Visit the traditional weaving workshop in the heart of historic Patan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
