import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Award, Users, TrendingUp, Clock } from "lucide-react"

const valueProps = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "15+ years of SAP consulting experience with 500+ successful implementations across industries.",
    stat: "500+",
    statLabel: "Projects",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description:
      "Accelerated deployment methodologies that reduce go-live time by up to 40% without compromising quality.",
    stat: "40%",
    statLabel: "Faster",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "SAP Gold Partner status and certified consultants ensure you receive world-class service and support.",
    stat: "Gold",
    statLabel: "Partner",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Assigned project teams with deep domain expertise who understand your business and industry challenges.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Our clients typically see 25-35% improvement in operational efficiency within the first year.",
    stat: "35%",
    statLabel: "ROI Boost",
  },
  {
    icon: Clock,
    title: "Future-Ready",
    description:
      "Solutions designed to scale and evolve with your business, ensuring long-term value and adaptability.",
    stat: "100%",
    statLabel: "Scalable",
  },
]

export function ValueProposition() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {valueProps.map((prop, index) => (
        <Card
          key={index}
          className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl" />
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{prop.stat}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{prop.statLabel}</div>
              </div>
            </div>
            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors">
              {prop.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">{prop.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
