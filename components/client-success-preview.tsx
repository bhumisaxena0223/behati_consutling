import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { clients } from "@/lib/data/clients"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const successStats = [
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-green-600" },
  { icon: Users, value: "50+", label: "Enterprise Clients", color: "text-primary" },
  { icon: Award, value: "11+", label: "Years Experience", color: "text-secondary" },
]

export function ClientSuccessPreview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Success Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        {successStats.map((stat, index) => (
          <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Client Stories Carousel */}
      <div className="mt-12 mx-2 md:mx-32">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Client Stories</h2>
        <Slider {...{...settings, slidesToShow: 1}}>
          {clients.slice(0, 2).map((client, index) => (
            <div key={client.id} className="px-2">
              <Card
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={100}
                        height={50}
                        className="object-contain"
                      />
                      <div className="text-right">
                        <div className="text-sm text-blue-600 font-medium">{client.industry}</div>
                        <div className="text-xs text-slate-500">{client.projectType}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{client.name}</h3>
                  </div>

                  <div className="p-6 space-y-4">
                    <blockquote className="text-slate-700 italic text-sm leading-relaxed">
                      "{client.testimonial.slice(0, 150)}..."
                    </blockquote>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-900">{client.author}</div>
                      <div className="text-xs text-slate-600">{client.authorRole}</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-900 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {client.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-xs text-slate-600 flex items-center">
                            <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}
