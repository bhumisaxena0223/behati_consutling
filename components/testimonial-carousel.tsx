"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { clients } from "@/lib/data/clients"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
  }

  const currentClient = clients[currentIndex]

  return (
    <div className="relative">
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-8 lg:p-12">
          <div className="text-center space-y-6">
            {/* <Quote className="h-12 w-12 mx-auto text-blue-600" /> */}

            <blockquote className="text-xl lg:text-2xl text-slate-700 italic font-medium leading-relaxed">
              "{currentClient.testimonial}"
            </blockquote>

            <div className="flex flex-col items-center space-y-4">
              <Image
                src={currentClient.logo || "/placeholder.svg"}
                alt={`${currentClient.name} logo`}
                width={120}
                height={60}
                className="object-contain opacity-80"
              />
              <div className="space-y-1">
                <div className="font-semibold text-slate-900">{currentClient.author}</div>
                <div className="text-sm text-slate-600">{currentClient.authorRole}</div>
                <div className="text-sm text-secondary font-medium">{currentClient.name}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="h-10 w-10 p-0 bg-transparent"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="h-10 w-10 p-0 bg-transparent"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
