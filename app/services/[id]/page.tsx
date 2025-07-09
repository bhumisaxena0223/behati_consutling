import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, BarChart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"
import Image from "next/image"

interface ServicePageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container">
        {/* Back Navigation */}
        <div className="mb-8 px-4 md:px-6">
          <Button variant="ghost" className="p-0 text-purple-600 hover:text-purple-700" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="grid gap-2 md:gap-8 lg:grid-cols-2 lg:gap-12 mb-16 pl-4 md:pl-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center">
                <service.icon className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">{service.title}</h1>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge
                    variant={
                      service.complexity === "High"
                        ? "destructive"
                        : service.complexity === "Medium"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {service.complexity} Complexity
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.timeline}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-600 mt-4">{service.shortDescription}</p>
            <p className="text-base text-slate-500 mt-4">{service.description}</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            {/* <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4"> */}
              <div className="h-full w-full bg-white/50 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* First Row: Key Features | Image */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8 px-4 md:px-6">
          {/* Key Features */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900">Key Features</CardTitle>
              <CardDescription>Comprehensive capabilities included in this service</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={service.imageKey || "/default-service.jpg"}
              alt={service.imageKey}
              className="max-w-full h-auto object-cover"
              style={{ maxHeight: 320 }}
            />
          </div>
        </div>

        {/* Second Row: Image | Business Benefits */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16 px-4 md:px-6">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={service.imageBusiness || "/default-service.jpg"}
              alt={service.title}
              className="max-w-full h-auto object-cover"
              style={{ maxHeight: 350 }}
            />
          </div>
          {/* Business Benefits */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-slate-900">Business Benefits</CardTitle>
              <CardDescription>Value delivered through our implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <BarChart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-purple-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started with {service.title}?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a tailored implementation plan that delivers maximum
            value for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
