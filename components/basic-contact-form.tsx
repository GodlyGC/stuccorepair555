"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Phone, Mail, User, FileText } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  projectInfo: string
}

export default function BasicContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitResult({
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon!",
      })
      setFormData({ name: "", email: "", phone: "", projectInfo: "" })
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
          <p className="text-gray-600">Fill out the form below and we'll get back to you with a quote!</p>
        </div>

        {submitResult && (
          <Alert
            className={`mb-6 ${submitResult.success ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"}`}
          >
            {submitResult.success ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertDescription className={submitResult.success ? "text-green-800" : "text-red-800"}>
              {submitResult.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2" />
              Full Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="w-full"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(416) 555-0123"
              className="w-full"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 mr-2" />
              Project Information
            </label>
            <Textarea
              name="projectInfo"
              value={formData.projectInfo}
              onChange={handleInputChange}
              placeholder="Describe your stucco repair needs..."
              className="w-full h-32 resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
