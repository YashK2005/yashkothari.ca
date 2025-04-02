"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
