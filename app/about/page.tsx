import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Award, TrendingUp, CheckCircle, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { team } from "@/lib/data/team"

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">About Behati Consulting</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are passionate SAP experts dedicated to transforming businesses through innovative technology solutions
            and strategic consulting.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="h-7 w-7 text-primary-600" />
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-slate-600 text-lg">
                To empower organizations with world-class SAP solutions that drive digital transformation, optimize
                business processes, and create sustainable competitive advantages in the modern economy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-7 w-7 text-primary-600" />
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-slate-600 text-lg">
                To be the leading SAP consulting partner, recognized for our innovation, expertise, and commitment to
                delivering exceptional value to our clients worldwide.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl p-8">
              <div className="h-full w-full bg-white/50 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Award className="h-16 w-16 mx-auto text-yellow-600" />
                  <div className="text-2xl font-bold text-slate-900">SAP Gold Partner</div>
                  <div className="text-sm text-slate-600">Certified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Behati Section */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Why Choose Behati?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines deep technical expertise with strategic business insight to deliver
              transformational results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified SAP professionals with 10+ years of experience in enterprise implementations.",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description:
                  "500+ successful implementations with measurable ROI and business transformation outcomes.",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "SAP Gold Partner status and multiple industry awards for excellence in consulting.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure flawless project delivery.",
              },
              {
                icon: Target,
                title: "Strategic Focus",
                description: "Business-first approach that aligns technology solutions with strategic objectives.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Cutting-edge solutions leveraging the latest SAP technologies and best practices.",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 mx-auto text-primary-600 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced professionals bring deep expertise and passion to every project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {team.map((member) => (
              <Card key={member.id} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-slate-900">{member.name}</CardTitle>
                  <CardDescription className="text-primary-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">{member.bio}</p>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Certifications</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {member.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary/90 via-primary text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how our expertise and experience can help transform your business through innovative SAP
            solutions.
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
              className="border-purple-300 text-blue-100 hover:bg-purple-800 bg-transparent"
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
