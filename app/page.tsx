"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, TrendingUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
// import { BackgroundGraphics } from "@/components/background-graphics"
import { ValueProposition } from "@/components/value-proposition"
import { ProcessSteps } from "@/components/process-steps"
import { ClientSuccessPreview } from "@/components/client-success-preview"
import Image from "next/image"
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HomePage() {
  const featuredServices = services.slice(0, 3)


  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-primary via-primary/90 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          src="/hero-section-2.mp4"
        />
        {/* <BackgroundGraphics /> */}
        <div className="container relative px-4 md:px-6 z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* On large screens, show text on the right and remove the image */}
            <div className="order-2 lg:order-2 space-y-6 lg:col-start-2">
              <Badge variant="secondary" className="bg-secondary/10 text-white hover:bg-secondary/20">
                SAP Excellence Since 2018
              </Badge>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0 }}
                className="text-3xl font-bold tracking-tight sm:text-3xl lg:text-4xl shadow-sm"
              >
                SAP-Powered Transformation
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* About Us Call-out */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Mission</h3>
                        <p className="text-blue-200 text-sm">Led by industry experts</p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Certified SAP expertise for digital transformation and lasting competitive edge—11+ years of proven success.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-white hover:bg-secondary/90 text-primary" asChild>
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary/50 bg-white hover:bg-secondary/90 text-primary"
                  asChild
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </div>
            {/* Remove the image/graphic column */}
          </div>
        </div>
      </section>
      <div className="py-16 lg:py-24 z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Pioneers in<br />SAP Business
        </h2>
        <div className="container flex justify-around text-center bg-slate-50 rounded-sm shadow-sm py-10">
          {[
            { num: '500+', label: 'Implementations' },
            { num: '11+', label: 'Years Expertise' },
            { num: '98%', label: 'Client Retention' }
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2
                }}
                className="w-20 h-20 rounded-full shadow-lg bg-white flex items-center justify-center mb-2"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-800 bg-clip-text text-transparent">
                  {s.num}
                </span>
              </motion.div>
              <div className="text-sm uppercase text-purple-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Behati Consulting - Value Proposition */}
      <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
              Why Choose Behati Consulting?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine deep SAP expertise with proven methodologies to deliver exceptional results that drive your
              business forward.
            </p>
          </div>

          <ValueProposition />
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful SAP implementations with minimal risk and maximum value
              delivery.
            </p>
          </div>

          <ProcessSteps />

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Featured Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our most popular SAP solutions that drive business transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.shortDescription}</CardDescription>
                  <div className="mt-4" />
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-2 h-auto text-secondary hover:bg-secondary/90" asChild>
                    <Link href={`/services/${service.id}`}>
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
          src="/client-success-bg.mp4"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Client Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we've helped industry leaders achieve remarkable results through strategic SAP implementations.
            </p>
          </div>

          <ClientSuccessPreview />
        </div>
      </section>

      <section className="py-12 lg:py-20 relative overflow-hidden container px-4 md:px-6">
        {/* CTA to Clients Page */}
        <div className="text-center bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">See More Success Stories</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Discover how we've helped industry leaders transform their businesses with innovative SAP solutions.
          </p>
          <Button size="lg" asChild>
            <Link href="/clients">
              View All Client Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our SAP expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our SAP expertise can drive your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-secondary/90" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
