"use client"
import Image from "next/image"
import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, Star, CheckCircle, Award, Users, Wrench, Menu, X, Edit3 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import EnhancedContactForm from "@/components/enhanced-contact-form"
import { Card, CardContent } from "@/components/ui/card"

export default function StuccoRepairLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Add the smooth scroll handler at the top of the component, before the return statement
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/stucco-logo.png"
              alt="Stucco Repair Logo"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, "process")}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
            <Button 
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion("tel:4162944431");
                }
                window.open("tel:4162944431");
              }} 
              type="button"
            >
              <Phone className="w-4 h-4 mr-2" />
              (416) 294-4431
            </Button>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center space-x-2">
          <Button 
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion("tel:4162944431");
                }
                window.open("tel:4162944431");
              }} 
              type="button"
            >
              <Phone className="w-4 h-4 mr-2" />
              (416) 294-4431
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#services"
                className="block text-gray-600 hover:text-red-600 transition-colors font-medium py-2"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
              <a
                href="#process"
                className="block text-gray-600 hover:text-red-600 transition-colors font-medium py-2"
                onClick={(e) => handleNavClick(e, "process")}
              >
                Process
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-red-600 transition-colors font-medium py-2"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          {/* Base Image */}
          <Image
            src="/images/toronto-skyline.jpeg"
            alt="Toronto Skyline"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlays for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/85"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/70"></div>
          {/* Modern gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-blue-900/10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Enhanced Left Content */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <Badge
                  className="bg-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg border-0"
                >
                  Servicing the GTA and Surrounding Areas
                </Badge>
                
                {/* Improved Typography Hierarchy */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                  Professional{" "}
                  <span className="text-red-500">
                    Stucco
                  </span>
                  <br />
                  Repair<span className="text-red-500">.ca</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium">
                  Expert stucco repair for holes, cracks, peeling, bubbling, and delamination. Professional service with
                  guaranteed results.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              {/* Desktop Buttons - Side by side */}
              <div className="hidden md:flex flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-black/20 backdrop-blur-sm shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      (window as any).gtag_report_conversion("tel:4162944431");
                    }
                    window.open("tel:4162944431");
                  }}
                >
                  <Phone className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Mobile Buttons - Stacked, above trust badges */}
              <div className="block md:hidden space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg px-6 py-4 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl"
                  onClick={() => {
                    // This will be connected to the mobile modal trigger
                    const formComponent = document.querySelector('[data-mobile-form-trigger]') as HTMLButtonElement;
                    if (formComponent) {
                      formComponent.click();
                    }
                  }}
                                 >
                   Get a Free Quote - Fill Out Form
                   <Edit3 className="w-5 h-5 ml-2" />
                 </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 text-lg px-6 py-4 bg-black/20 backdrop-blur-sm shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                      (window as any).gtag_report_conversion("tel:4162944431");
                    }
                    window.open("tel:4162944431");
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 lg:flex lg:items-center lg:space-x-6 xl:space-x-8 gap-3 lg:gap-4 pt-6 lg:pt-8">
                {[
                  { icon: Shield, color: "green", text: "Licensed & Insured" },
                  { icon: Star, color: "yellow", text: "5-Star Rated" },
                  { icon: Clock, color: "blue", text: "24hr Response" },
                  { icon: Award, color: "purple", text: "10+ Years Experience" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-${item.color}-500/20 rounded-full blur-sm group-hover:bg-${item.color}-500/30 transition-all duration-300`}></div>
                      <div className={`relative bg-${item.color}-500/10 backdrop-blur-sm rounded-full p-2 border border-${item.color}-400/30 group-hover:border-${item.color}-400/50 transition-all duration-300`}>
                        <item.icon className={`w-5 h-5 lg:w-6 lg:h-6 text-${item.color}-400`} />
                      </div>
                    </div>
                                         <span className="text-xs lg:text-sm text-gray-200 font-medium">
                       {item.text}
                     </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Right Content - Contact Form */}
            <div id="contact" className="w-full my-10 lg:my-12">
              <div className="lg:pl-4">
                <EnhancedContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section id="process" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 fade-in">It's as Easy as...</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto slide-up">
              Our streamlined process ensures you get professional stucco repair with minimal hassle
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Share Your Information</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Fill out our secure form with your contact details and project information. All fields are required
                  for accurate quotes.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Upload Photos</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Add photos of your stucco damage (close-up and wide view) to help us provide the most accurate quote
                  possible.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Get Your Quote</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We'll call you within 24 hours with a detailed quote and schedule a convenient time for assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 fade-in">Our Expert Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto slide-up">
              Beyond stucco repair, we offer comprehensive exterior services to keep your property looking its best
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { service: "Stucco Repair", icon: Wrench },
              { service: "New Installation", icon: Users },
              { service: "Caulking", icon: CheckCircle },
              { service: "Full Restoration", icon: Award },
              { service: "Masonry Work", icon: Shield },
              { service: "Parging", icon: Star },
              { service: "Exterior Painting", icon: CheckCircle },
              { service: "Concrete Work", icon: Wrench },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.service}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Need any of these services? Contact us for a professional consultation.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl" 
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion("tel:4162944431");
                }
                window.open("tel:4162944431");
              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call (416) 294-4431
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/stucco-footer-logo.png"
                alt="Stucco Repair Logo"
                width={240}
                height={60}
                className="h-12 w-auto object-contain"
              />
              <p className="text-gray-400 max-w-sm">
                Professional stucco repair services serving the GTA and surrounding areas. Licensed, insured, and
                committed to quality.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:4162944431" 
                    className="hover:text-white transition-colors"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion("tel:4162944431");
                      }
                    }}
                  >
                    (416) 294-4431
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:info@stuccorepair.ca" 
                    className="hover:text-white transition-colors"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion("mailto:info@stuccorepair.ca");
                      }
                    }}
                  >
                    info@stuccorepair.ca
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>GTA & Surrounding Areas</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Stucco Repair & Restoration</li>
                <li>New Stucco Installation</li>
                <li>Exterior Painting</li>
                <li>Masonry & Concrete Work</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 StuccoRepair.ca. All rights reserved. | Licensed & Insured | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
