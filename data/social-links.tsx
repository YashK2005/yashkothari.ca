"use client"

import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"
import { XIcon } from "@/components/x-icon"

export interface SocialLink {
  href: string
  icon: React.ReactNode
  label: string
  text?: string
  isEmail?: boolean
}

const socialLinks: SocialLink[] = [
  { 
    href: "https://github.com/YashK2005", 
    icon: <Github className="h-4 w-4 text-blue-400" />, 
    label: "GitHub",
    text: "github.com/YashK2005"
  },
  { 
    href: "https://www.linkedin.com/in/yashkothari7/", 
    icon: <Linkedin className="h-4 w-4 text-blue-400" />, 
    label: "LinkedIn",
    text: "linkedin.com/in/yashkothari7"
  },
  { 
    href: "https://x.com/YashK_7", 
    icon: (
      <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ), 
    label: "Twitter",
    text: "@YashK_7"
  },
  { 
    href: "mailto:yashkoth7@gmail.com", 
    icon: <Mail className="h-4 w-4 text-blue-400" />, 
    label: "Email",
    text: "yashkoth7@gmail.com",
    isEmail: true
  }
];

export default socialLinks;
