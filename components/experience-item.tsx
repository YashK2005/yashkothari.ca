"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export interface ExperienceItemProps {
  logo: string
  year: string
  title: string
  company: string
  description: string
  imageSize?: number
}

export function ExperienceItem({ 
  logo, 
  year, 
  title, 
  company, 
  description, 
  imageSize = 120 
}: ExperienceItemProps) {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={logo}
              alt={`${company} Logo`}
              width={imageSize}
              height={imageSize}
              className="rounded-lg"
            />
            <Badge variant="outline" className="border-white/20 bg-white/5 text-white">
              {year}
            </Badge>
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-white/70">{company}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p 
          className="text-white/80" 
          dangerouslySetInnerHTML={{ 
            __html: description.replace(
              /<a/g, 
              '<a class="link-highlight"'
            ) 
          }} 
        />
      </div>
    </div>
  )
}
