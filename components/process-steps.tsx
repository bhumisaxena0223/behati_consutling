import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Cog, Rocket, CheckCircle, BarChart3 } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description:
      "We analyze your current SAP landscape, business requirements, and strategic objectives to create a tailored roadmap.",
    icon: Search,
    color: "from-primary to-primary/90",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our experts develop a comprehensive implementation strategy with clear timelines, milestones, and success metrics.",
    icon: Users,
    color: "from-primary to-primary/90",
  },
  {
    step: "03",
    title: "Implementation & Configuration",
    description: "We execute the solution with precision, ensuring minimal disruption to your business operations.",
    icon: Cog,
    color: "from-primary to-primary/90",
  },
  {
    step: "04",
    title: "Testing & Go-Live",
    description: "Rigorous testing and smooth deployment ensure your SAP system performs optimally from day one.",
    icon: Rocket,
    color: "from-primary to-primary/90",
  },
  {
    step: "05",
    title: "Training & Support",
    description:
      "Comprehensive user training and ongoing support ensure your team maximizes the value of your SAP investment.",
    icon: CheckCircle,
    color: "from-primary to-primary/90",
  },
  {
    step: "06",
    title: "Optimization & Growth",
    description:
      "Continuous monitoring and optimization help you adapt and scale your SAP solutions as your business evolves.",
    icon: BarChart3,
    color: "from-purple-600 to-purple-700",
  },
]

export function ProcessSteps() {
  return (
    <div className="relative">
      {/* Connection lines for desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/30 via-primary to-secondary/50 transform -translate-y-1/2 z-0" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {processSteps.map((step, index) => (
          <Card
            key={index}
            className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl relative overflow-hidden transform hover:scale-105 hover:-translate-y-2"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-300 group-hover:text-secondary transition-colors">
                  {step.step}
                </div>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
