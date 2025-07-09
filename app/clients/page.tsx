import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { clients } from "@/lib/data/clients"

export default function ClientsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">Our Clients</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're proud to partner with industry leaders who trust us to deliver exceptional SAP solutions and drive
            their digital transformation.
          </p>
        </div>

        {/* Client Success Stories */}
        <div className="space-y-12 mb-16">
          {clients.map((client, index) => (
            <Card
              key={client.id}
              className={`border-0 shadow-xl overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Client Info */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-end w-full">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={100}
                        height={80}
                        className="object-contain ml-2"
                      />
                      <h2 className="text-2xl font-bold text-purple-900 ml-4 pb-0">{client.name}</h2>
                    </div>
                    <Badge variant="outline" className="mt-4 text-green-600 bg-green-100">{client.industry}</Badge>
                  </div>

                  {/* Testimonial */}
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-purple-600" />
                    <blockquote className="text-lg text-slate-700 italic">"{client.testimonial}"</blockquote>
                    <div className="space-y-1">
                      <div className="font-medium text-slate-900">{client.author}</div>
                      <div className="text-sm text-slate-600">{client.authorRole}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {client.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
                      <TrendingUp className="h-16 w-16 text-purple-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-purple-600-900">Success</div>
                      <div className="text-sm text-purple-600-700">Delivered Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Our Track Record</h2>
            <p className="text-slate-600">Numbers that demonstrate our commitment to client success</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Enterprise Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/90 via-primary/95 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Success Stories</h2>
          <p className="text-purple-600-100 mb-6 max-w-2xl mx-auto">
            Ready to transform your business with SAP? Let's discuss how we can help you achieve similar results and
            drive your digital transformation forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-blue-50" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-600-100 hover:bg-purple-800 bg-transparent"
              asChild
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
