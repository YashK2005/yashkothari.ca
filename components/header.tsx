"use client"

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import navLinks from "@/data/nav-links"
import socialLinks from "@/data/social-links"
import personalInfo from "@/data/personal-info"

export interface HeaderProps {
  logoText?: string
  customNavLinks?: typeof navLinks
  customSocialLinks?: typeof socialLinks
}

export function Header({ 
  logoText = personalInfo.logoText,
  customNavLinks,
  customSocialLinks
}: HeaderProps) {
  const links = customNavLinks || navLinks;
  const socials = customSocialLinks || socialLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          {logoText}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link, index) => (
              <Link 
                key={`nav-${index}`}
                href={link.href} 
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((social, index) => (
              <Button
                key={`social-${index}`}
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10"
              >
                <Link 
                  href={social.href} 
                  target={social.isEmail ? "_self" : "_blank"} 
                  rel="noopener noreferrer"
                >
                  <span className="h-5 w-5">
                    {social.icon}
                  </span>
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
