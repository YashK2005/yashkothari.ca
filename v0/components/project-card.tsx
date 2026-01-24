"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useFadeIn } from "@/hooks/useFadeIn"

export interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  isVideo?: boolean
  githubUrl?: string
  demoUrl?: string
  demoLabel?: string
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  isVideo = false,
  githubUrl, 
  demoUrl,
  demoLabel = "Demo" 
}: ProjectCardProps) {
  const fadeRef = useFadeIn()
  
  return (
    <Card 
      ref={fadeRef}
      className="bg-white/5 border-white/10 overflow-hidden group fade-in gradient-border-card"
    >
      <div className="relative aspect-video overflow-hidden">
        {isVideo ? (
          <video
            src={imageUrl}
            className="w-full h-full object-cover"
            controls
            loop
            muted
            playsInline
            poster={imageUrl.replace('.mp4', '-poster.jpg')}
            preload="auto"
          />
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-500"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-white/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="group text-white hover:text-white hover:bg-white/10"
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
              <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
        {demoUrl && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="group text-white hover:text-white hover:bg-white/10"
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {demoLabel}
              <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
