"use client"

import { useState } from "react"
import { Upload, Sparkles, Eye, User, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"

export function AIRecognition() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasResult, setHasResult] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setHasResult(true)
    }, 2000)
  }

  const handleReset = () => {
    setHasResult(false)
    setUploadedImage(false)
  }

  const handleImageUpload = () => {
    setUploadedImage(true)
  }

  return (
    <section id="ai-recognition" className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Instantly Identify
            </span>{" "}
            Gujarati Crafts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload an image of a Gujarati art piece, and our AI will help identify the art form and suggest artisans who
            practice it
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
            {/* Upload Area */}
            <div className="mb-8">
              {!uploadedImage ? (
                <div
                  onClick={handleImageUpload}
                  className="border-3 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 cursor-pointer group"
                >
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    Drag & Drop Your Image Here
                  </h3>
                  <p className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
                    or click to browse your files
                  </p>
                  <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG, WEBP up to 10MB</p>
                </div>
              ) : (
                <div className="border-2 border-orange-200 rounded-2xl p-6 bg-orange-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                        <Eye className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Traditional_Patola_Saree.jpg</h4>
                        <p className="text-sm text-gray-600">2.4 MB • Uploaded successfully</p>
                      </div>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-gray-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/50 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Sparkles className="w-8 h-8 text-orange-600" />
                      </div>
                      <p className="text-gray-600 font-medium">Image Preview</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Analyze Button */}
            {uploadedImage && !hasResult && (
              <div className="text-center mb-8">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing Artwork...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Analyze Artwork</span>
                    </div>
                  )}
                </button>
              </div>
            )}

            {/* Results Display */}
            {hasResult && (
              <div className="border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Analysis Results */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Analysis Results</h3>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-700">Art Form:</span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            92% Confidence
                          </span>
                        </div>
                        <p className="text-xl font-bold text-purple-600">Patan Patola</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <span className="font-semibold text-gray-700 block mb-2">Description:</span>
                        <p className="text-gray-600 leading-relaxed">
                          A traditional double ikat woven silk saree, characterized by intricate geometric patterns and
                          vibrant colors. This ancient craft from Patan, Gujarat, involves resist-dyeing both warp and
                          weft threads before weaving.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Artisans */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Suggested Artisans</h3>

                    <div className="space-y-4">
                      {[
                        { name: "Ramesh Vankar", specialty: "Patan Patola Master", id: 1 },
                        { name: "Kiran Salvi", specialty: "Traditional Weaver", id: 2 },
                        { name: "Mahesh Vankar", specialty: "Heritage Craftsman", id: 3 },
                      ].map((artisan) => (
                        <div
                          key={artisan.id}
                          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-teal-500 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{artisan.name}</h4>
                              <p className="text-sm text-gray-600">{artisan.specialty}</p>
                            </div>
                          </div>
                          <Link href={`/artisan/${artisan.id}`}>
                            <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                              <span>View Profile</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Link href="/artisans">
                        <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                          View All Patola Artisans →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    Try Another Image
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
