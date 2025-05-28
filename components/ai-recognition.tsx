"use client"

import { useState } from "react"
import { Upload, Sparkles, Eye, User, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"

export function AIRecognition() {
  const [uploadedImageFile, setUploadedImageFile] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState<any | null>(null) // Consider defining a more specific type for analysisResult
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      // In a real app, you'd use event.target.files[0] to get the File object.
      // For mock purposes, we'll use a placeholder URL.
      setUploadedImageFile("https://via.placeholder.com/400x300?text=Uploaded+Craft")
      setAnalysisResult(null) // Clear previous results
    }
  }

  const handleAnalyze = () => {
    if (!uploadedImageFile) {
      // Optionally, show an alert or log a message
      console.warn("Please upload an image first.")
      return
    }
    setIsAnalyzing(true)
    setAnalysisResult(null)

    setTimeout(() => {
      setAnalysisResult({
        artForm: "Bandhani Print",
        confidence: "91%",
        description: "A traditional Gujarati tie-dye textile, known for its vibrant colors and intricate patterns created by plucking the cloth with fingernails into many tiny bindings.",
        suggestedArtisans: [
          { id: "a001", name: "Mira Vankar", imageUrl: "https://via.placeholder.com/50x50?text=MV" },
          { id: "a002", name: "Rajesh Khatri", imageUrl: "https://via.placeholder.com/50x50?text=RK" }
        ]
      })
      setIsAnalyzing(false)
    }, 1500)
  }

  const handleReset = () => {
    setUploadedImageFile(null)
    setAnalysisResult(null)
    setIsAnalyzing(false)
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
            {/* File Input (hidden, triggered by label) */}
            <input
              type="file"
              id="imageUploadInput"
              accept="image/jpeg, image/png, image/webp"
              className="hidden"
              onChange={handleImageUpload}
            />

            {/* Upload Area */}
            <div className="mb-8">
              {!uploadedImageFile ? (
                <label
                  htmlFor="imageUploadInput"
                  className="border-3 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 cursor-pointer group block"
                >
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4 group-hover:text-orange-500 transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    Click to Upload Your Image
                  </h3>
                  <p className="text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
                    or drag and drop it here
                  </p>
                  <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG, WEBP up to 10MB</p>
                </label>
              ) : (
                <div className="border-2 border-orange-200 rounded-2xl p-6 bg-orange-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                        <Eye className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Uploaded Image</h4>
                        <p className="text-sm text-gray-600">Ready for analysis</p>
                      </div>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-gray-500 hover:text-orange-600 transition-colors duration-200"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-teal-100 rounded-xl flex items-center justify-center overflow-hidden">
                    {uploadedImageFile && (
                      <img src={uploadedImageFile} alt="Uploaded craft" className="w-full h-full object-contain" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Analyze Button & Loading State */}
            {uploadedImageFile && !analysisResult && (
              <div className="text-center mb-8">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing, please wait...</span>
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

            {isAnalyzing && !analysisResult && (
              <div className="text-center mb-8 text-gray-600">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing, please wait...</span>
                </div>
              </div>
            )}

            {/* Results Display - This block is now controlled by `analysisResult && !isAnalyzing` above */}
            {analysisResult && !isAnalyzing && (
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

            {/* Results Display - This block is now controlled by `analysisResult && !isAnalyzing` above */}
            {analysisResult && !isAnalyzing && (
              // The existing results display JSX will be nested here
              // We will modify its content to use `analysisResult` data
              <div className="border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Analysis Results */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Analysis Results</h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-700">Art Form:</span>
                          {analysisResult.confidence && (
                            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                              {analysisResult.confidence} Confidence
                            </span>
                          )}
                        </div>
                        <p className="text-xl font-bold text-purple-600">{analysisResult.artForm}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <span className="font-semibold text-gray-700 block mb-2">Description:</span>
                        <p className="text-gray-600 leading-relaxed">
                          {analysisResult.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Artisans */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Suggested Artisans</h3>
                    {analysisResult.suggestedArtisans && analysisResult.suggestedArtisans.length > 0 ? (
                      <div className="space-y-4">
                        {analysisResult.suggestedArtisans.map((artisan: any) => (
                          <div
                            key={artisan.id}
                            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-teal-500 rounded-full flex items-center justify-center overflow-hidden">
                                {artisan.imageUrl ? (
                                  <img src={artisan.imageUrl} alt={artisan.name} className="w-full h-full object-cover" />
                                ) : (
                                  <User className="w-6 h-6 text-white" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{artisan.name}</h4>
                                {/* <p className="text-sm text-gray-600">{artisan.specialty}</p> */}
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
                    ) : (
                      <p className="text-gray-600">No specific artisans found for this art form yet.</p>
                    )}

                    {/* Optional: Link to see all artisans of this type if applicable */}
                    {/* <div className="mt-6 text-center">
                      <Link href={`/artisans?artForm=${analysisResult.artForm.replace(/\s+/g, '-')}`}>
                        <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                          View All {analysisResult.artForm} Artisans →
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center mx-auto space-x-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Try Another Image</span>
                  </button>
                </div>
              </div>
            )}
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
