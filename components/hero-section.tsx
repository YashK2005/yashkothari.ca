"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import personalInfo from "@/data/personal-info"

export interface HeroSectionProps {
  name?: string
  tagline?: string
}

export function HeroSection({ 
  name = personalInfo.name,
  tagline = personalInfo.tagline
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Stars Background - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-stars"></div>
      </div>

      {/* Mountain Silhouette - Fixed Background */}
      <div className="fixed bottom-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_background_image-aGZjrNBDoNlptSsb3yp9ohnQYM3C0R.png"
          alt="Mountain Silhouette"
          width={1200}
          height={300}
          className="w-full h-auto object-cover object-bottom opacity-70"
          priority
        />
      </div>

      <div className="container relative z-10 pt-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-blue-400">Yash Kothari</span> 
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            {tagline}
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="rounded-full group bg-white text-deep-blue hover:bg-white/90">
              <Link href="#experience" className="flex items-center">
                Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full group bg-white/10 text-white hover:bg-white/20">
              <Link href="#projects" className="flex items-center">
                Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
