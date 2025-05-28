"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock data for artisans
const mockArtisans = [
  {
    id: 1,
    name: "Ramesh Vankar",
    specialty: "Patan Patola Weaver",
    location: "Patan, Gujarat",
    description: "Master weaver preserving the ancient double ikat technique passed down through 7 generations.",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Patola",
  },
  {
    id: 2,
    name: "Meera Khatri",
    specialty: "Bandhani Artist",
    location: "Bhuj, Kutch",
    description: "Expert in traditional tie-dye techniques, creating intricate patterns with natural dyes.",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Bandhani",
  },
  {
    id: 3,
    name: "Kiran Ahir",
    specialty: "Kutch Embroidery Master",
    location: "Bhuj, Kutch",
    description: "Renowned for mirror work and intricate thread embroidery on traditional garments.",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Embroidery",
  },
  {
    id: 4,
    name: "Haresh Soni",
    specialty: "Wood Carving Artisan",
    location: "Ahmedabad, Gujarat",
    description: "Specializes in traditional Gujarati architectural wood carving and furniture design.",
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Wood Carving",
  },
  {
    id: 5,
    name: "Lalita Rabari",
    specialty: "Rabari Embroidery Expert",
    location: "Saurashtra, Gujarat",
    description: "Keeper of nomadic Rabari embroidery traditions with geometric patterns and vibrant colors.",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Embroidery",
  },
  {
    id: 6,
    name: "Dinesh Joshi",
    specialty: "Block Printing Master",
    location: "Pethapur, Gujarat",
    description: "Traditional block printing artist creating beautiful textiles with hand-carved wooden blocks.",
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400",
    artForm: "Block Printing",
  },
]

// const artForms = ["All", "Patola", "Bandhani", "Embroidery", "Wood Carving", "Block Printing", "Pottery"] // This will be dynamically generated
const regions = ["All Regions", "Kutch", "Patan", "Ahmedabad", "Saurashtra", "Pethapur"]

export default function ArtisansPage() {
  // State for the search term input by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State for the selected art form filter
  const [selectedArtForm, setSelectedArtForm] = useState(""); // Default to empty string for "All Art Forms"
  // State for the selected region filter
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  // State to toggle the visibility of filter options
  const [showFilters, setShowFilters] = useState(false);

  // Dynamically generate a unique, sorted list of art forms from the mock artisan data
  // This ensures the filter dropdown always reflects the available art forms
  const uniqueArtForms = Array.from(new Set(mockArtisans.map(artisan => artisan.artForm))).sort();

  // Filter the artisans based on the current search term and selected filters
  const filteredArtisans = mockArtisans.filter((artisan) => {
    // Check if artisan's name, specialty, or location includes the search term (case-insensitive)
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if the artisan's art form matches the selected filter, or if "All Art Forms" is selected
    const matchesArtForm = selectedArtForm === "" || artisan.artForm === selectedArtForm; // Updated to check for empty string
    // Check if the artisan's location includes the selected region, or if "All Regions" is selected
    const matchesRegion = selectedRegion === "All Regions" || artisan.location.includes(selectedRegion);

    // Artisan is included if all conditions are met
    return matchesSearch && matchesArtForm && matchesRegion;
  });

  return (


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Header Section */}
      <Navbar />
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Discover{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Gujarati Artisans
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with master craftspeople preserving centuries-old traditions
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by art form, artisan name, or region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-orange-300 transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Art Form</label>
                  <select
                    value={selectedArtForm}
                    onChange={(e) => setSelectedArtForm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">All Art Forms</option>
                    {uniqueArtForms.map((form) => (
                      <option key={form} value={form}>
                        {form}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Artisan Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{artisan.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{artisan.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{artisan.specialty}</p>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{artisan.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{artisan.description}</p>

                <Link href={`/artisan/${artisan.id}`}>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-orange-300 transition-colors duration-200">
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                  page === 1 ? "bg-orange-500 text-white" : "border border-gray-300 hover:border-orange-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-orange-300 transition-colors duration-200">
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
