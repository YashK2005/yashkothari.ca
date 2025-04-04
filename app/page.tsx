"use client"

import React from 'react'
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-animate text-white">
      {/* Gradient overlay for better star visibility */}
      <div className="gradient-overlay"></div>
      
      {/* Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-stars"></div>
      </div>

      {/* Mountain Silhouette - Fixed Background */}
      <div className="fixed bottom-0 left-0 w-full z-3 pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_background_image-aGZjrNBDoNlptSsb3yp9ohnQYM3C0R.png"
          alt="Mountain Silhouette"
          className="w-full h-auto object-cover object-bottom opacity-70"
          loading="eager"
        />
      </div>
      
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
