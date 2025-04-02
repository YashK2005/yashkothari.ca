"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import socialLinks from "@/data/social-links"

export interface ContactSectionProps {
  customSocialLinks?: typeof socialLinks
}

export function ContactSection({
  customSocialLinks
}: ContactSectionProps = {}) {
  const contacts = customSocialLinks || socialLinks;

  return (
    <section id="contact" className="py-12 md:py-20 relative z-10">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="h-1 w-12 bg-blue-400 mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <p className="text-white/70">
              I'm always open to discuss new ideas and opportunities!
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={`contact-link-${index}`} className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 border-white/20 text-white hover:bg-white/10"
                  >
                    <span className="text-blue-400">
                      {contact.icon}
                    </span>
                  </Button>
                  <a 
                    href={contact.href} 
                    target={contact.isEmail ? "_self" : "_blank"}
                    rel={contact.isEmail ? "" : "noopener noreferrer"}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {contact.text || contact.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
