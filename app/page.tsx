"use client"
import Image from "next/image"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight, Shield, Clock, Star, CheckCircle, Award, Users, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import EnhancedContactForm from "@/components/enhanced-contact-form"
import { Card, CardContent } from "@/components/ui/card"

export default function StuccoRepairLanding() {
  // Add the smooth scroll handler at the top of the component, before the return statement
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
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
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-red-600 transition-colors"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            <a
              href="#process"
              className="text-gray-600 hover:text-red-600 transition-colors"
              onClick={(e) => handleNavClick(e, "process")}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-red-600 transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => window.open("tel:4162944431")} type="button">
              <Phone className="w-4 h-4 mr-2" />
              (416) 294-4431
            </Button>
          </div>
          <div className="md:hidden">
            <Button className="bg-red-600 hover:bg-red-700" onClick={() => window.open("tel:4162944431")} type="button">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/70"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/toronto-skyline.jpeg"
            alt="Toronto Skyline"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge
                  className="bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium border border-red-500/50"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                  }}
                >
                  Servicing the GTA and Surrounding Areas
                </Badge>
                <h1
                  className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  Professional{" "}
                  <span
                    className="text-red-500 drop-shadow-lg"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.9), 0px 0px 12px rgba(220,38,38,0.3)",
                    }}
                  >
                    Stucco
                  </span>
                  <br />
                  <span
                    className="text-gray-100 drop-shadow-lg"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Repair
                  </span>
                  <span
                    className="text-red-500 drop-shadow-lg"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.9), 0px 0px 12px rgba(220,38,38,0.3)",
                    }}
                  >
                    .ca
                  </span>
                </h1>
                <p
                  className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium"
                  style={{
                    textShadow: "1px 1px 3px rgba(0,0,0,0.8), 0px 0px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  Expert stucco repair for holes, cracks, peeling, bubbling, and delamination. Professional service with
                  guaranteed results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4 shadow-2xl border border-red-500/50"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 bg-black/20 backdrop-blur-sm shadow-2xl"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                  onClick={() => window.open("tel:4162944431")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:flex md:items-center md:space-x-8 gap-4 pt-8">
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm group-hover:bg-green-500/30 transition-all duration-300"></div>
                    <div className="relative bg-green-500/10 backdrop-blur-sm rounded-full p-2 border border-green-400/30 group-hover:border-green-400/50 transition-all duration-300">
                      <Shield className="w-6 h-6 text-green-400 drop-shadow-lg" />
                    </div>
                  </div>
                  <span
                    className="text-sm text-gray-100 font-medium"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-sm group-hover:bg-yellow-500/30 transition-all duration-300"></div>
                    <div className="relative bg-yellow-500/10 backdrop-blur-sm rounded-full p-2 border border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-300">
                      <Star className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                    </div>
                  </div>
                  <span
                    className="text-sm text-gray-100 font-medium"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    5-Star Rated
                  </span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></div>
                    <div className="relative bg-blue-500/10 backdrop-blur-sm rounded-full p-2 border border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-300">
                      <Clock className="w-6 h-6 text-blue-400 drop-shadow-lg" />
                    </div>
                  </div>
                  <span
                    className="text-sm text-gray-100 font-medium"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    24hr Response
                  </span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-all duration-300"></div>
                    <div className="relative bg-purple-500/10 backdrop-blur-sm rounded-full p-2 border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-300">
                      <Award className="w-6 h-6 text-purple-400 drop-shadow-lg" />
                    </div>
                  </div>
                  <span
                    className="text-sm text-gray-100 font-medium"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    10+ Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div id="contact">
              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">It's as Easy as...</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get professional stucco repair with minimal hassle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out our secure form with your contact details and project information. All fields are required
                  for accurate quotes.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Photos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Add photos of your stucco damage (close-up and wide view) to help us provide the most accurate quote
                  possible.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Quote</h3>
                <p className="text-gray-600 leading-relaxed">
                  We'll call you within 24 hours with a detailed quote and schedule a convenient time for assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond stucco repair, we offer comprehensive exterior services to keep your property looking its best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-8 h-8 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-gray-900">{item.service}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Need any of these services? Contact us for a professional consultation.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={() => window.open("tel:4162944431")}>
              <Phone className="w-5 h-5 mr-2" />
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
                  <a href="tel:4162944431" className="hover:text-white transition-colors">
                    (416) 294-4431
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@stuccorepair.ca" className="hover:text-white transition-colors">
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
