import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data/services"

export default function ServicesPage() {
  return (
    <div className="pb-16 lg:pb-24">
      <div className="container px-4 md:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 relative overflow-hidden md:h-64 h-36 py-10">
          {/* Background Image */}
          <img
            src="/services/sap-services.png"
            alt="SAP Services Background"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          />
          
        </div>

        <div className="relative z-10 text-center space-y-4 mb-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">Our SAP Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive SAP solutions designed to transform your business operations and drive sustainable growth.
            </p>
          </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge
                    variant={
                      service.complexity === "High"
                        ? "destructive"
                        : service.complexity === "Medium"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {service.complexity}
                  </Badge>
                </div>
                <CardTitle className="text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Timeline: {service.timeline}
                  </div>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full border-2 border-purple-200 rounded-sm mt-6">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full text-purple-600 justify-center"
                    asChild
                  >
                    <Link href={`/services/${service.id}`}>
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center my-16">
          <img src="/sap-hero-1.png" alt="SAP" className="max-w-full h-auto" style={{ maxHeight: 560 }} />
        </div>
        {/* CTA Section */}
        <div className="mt-16 text-center bg-purple-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our SAP expertise to meet your specific
            requirements and objectives.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
