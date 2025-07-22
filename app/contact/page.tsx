import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, DollarSign } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with SAP? Get in touch with our experts to discuss your project
            requirements and objectives.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-900">Get in Touch</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">Hr@behaticonsulting.com</div>
                    <div className="text-sm text-slate-500">We respond within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-slate-600">
                      <a href="tel:919790749488" className="hover:text-blue-600 transition-colors">+91 9790749488</a>
                    </div>
                    <div className="text-slate-600">
                      <a href="tel:919789031769" className="hover:text-blue-600 transition-colors">+91 9789031769</a>
                    </div>
                    <div className="text-sm text-slate-500">Mon-Fri, 9AM-6PM IST</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Headquarters Office</div>
                    <div className="text-slate-600">E4, Resident Pere Laval, Quatre Bornes, Mauritius</div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                      <span className="text-slate-600">BRN: C22188798</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Indian Office Branch</div>
                    <div className="text-slate-600">Behati Consulting Private Limited 
                    363, 11th Cross,</div>
                    <div className="text-slate-600">6th Main, Vijaya Bank layout, Bilekhalli, Bangalore</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Business Hours</div>
                    <div className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className="text-slate-600">Saturday - Sunday: Closed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-900">Our Location</CardTitle>
                <CardDescription>Visit us at our New York office</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.192016905685!2d77.60332898550294!3d12.895371254958457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14df5bc2f5d5%3A0xcf084cd5c819adc1!2s363%2C%2011th%20Cross%20Rd%2C%20Vijaya%20Bank%20Layout%2C%20Bilekahalli%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1751885758048!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
