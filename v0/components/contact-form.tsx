"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

type FormData = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white resize-none"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        
        {submitStatus === 'success' && (
          <p className="mt-2 text-sm text-green-400">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-2 text-sm text-red-400">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  )
} 
