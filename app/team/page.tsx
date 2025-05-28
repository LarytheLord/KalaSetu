"use client"

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, Palette, Brain, Rocket } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const teamMembers = [
  {
    id: 1,
    name: "Arjun Patel",
    role: "Lead Developer & Project Architect",
    bio: "Full-stack developer passionate about preserving cultural heritage through technology. Specializes in React, Node.js, and AI integration.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["React", "Node.js", "AI/ML", "System Design"],
    social: {
      github: "#",
      linkedin: "#",
      email: "arjun@artisanbeaconai.com",
    },
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UX/UI Designer & Cultural Researcher",
    bio: "Design enthusiast with deep knowledge of Gujarati art forms. Creates intuitive interfaces that honor traditional aesthetics while embracing modern usability.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["UI/UX Design", "Cultural Research", "Figma", "User Testing"],
    social: {
      github: "#",
      linkedin: "#",
      email: "priya@artisanbeaconai.com",
    },
  },
  {
    id: 3,
    name: "Karan Modi",
    role: "AI Specialist & Computer Vision Engineer",
    bio: "Machine learning engineer focused on computer vision and pattern recognition. Developing the AI models that power ArtisanBeacon AI's art recognition capabilities.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    social: {
      github: "#",
      linkedin: "#",
      email: "karan@artisanbeaconai.com",
    },
  },
  {
    id: 4,
    name: "Ravi Joshi",
    role: "Product Manager & Strategy Lead",
    bio: "Product strategist with experience in cultural preservation initiatives. Ensures ArtisanBeacon AI serves both artisans and art enthusiasts effectively.",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Product Strategy", "Market Research", "Stakeholder Management", "Analytics"],
    social: {
      github: "#",
      linkedin: "#",
      email: "ravi@artisanbeaconai.com",
    },
  },
]

const roleIcons = {
  "Lead Developer & Project Architect": Code,
  "UX/UI Designer & Cultural Researcher": Palette,
  "AI Specialist & Computer Vision Engineer": Brain,
  "Product Manager & Strategy Lead": Rocket,
}

export default function TeamPage() {
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingTeam(false);
    }, 100); // Simulate 100ms delay

    if (isLoadingTeam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-xl text-gray-700">Loading team...</p>
      </div>
    );
  }

  return () => clearTimeout(timer);
  }, []);
  if (isLoadingTeam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-xl text-gray-700">Loading team...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent">
                Innovators
              </span>{" "}
              Behind ArtisanBeacon AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate team of technologists, designers, and cultural enthusiasts united by our mission to preserve
              and promote Gujarat's rich artisanal heritage through innovative technology.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member) => {
            const IconComponent = roleIcons[member.role as keyof typeof roleIcons]

            if (isLoadingTeam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <p className="text-xl text-gray-700">Loading team...</p>
      </div>
    );
  }

  return (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-gradient-to-br from-orange-200 to-teal-200">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>

                      {/* Skills */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-teal-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <a
                          href={member.social.github}
                          className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5 text-orange-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-teal-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              "We believe that technology should serve as a bridge between tradition and innovation. Through ArtisanBeacon AI,
              we're not just building an app – we're creating a digital ecosystem that empowers artisans, educates art
              lovers, and ensures that Gujarat's magnificent craft traditions continue to thrive in the digital age."
            </p>
          </div>
        </div>

        {/* Hack With Gujarat */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Hack With Gujarat 2025</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              This project was created as part of Hack With Gujarat 2025, demonstrating our commitment to using
              technology for cultural preservation and community empowerment. We're proud to contribute to Gujarat's
              growing tech ecosystem while honoring its rich cultural heritage.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
