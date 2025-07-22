import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, DollarSign } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">Behati Consulting</span>
            </div>
            <p className="text-slate-300 text-sm">
              Transforming businesses through SAP excellence and digital innovation.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div> */}
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/s4hana" className="text-slate-300 hover:text-secondary transition-colors">
                  S/4HANA Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/successfactors" className="text-slate-300 hover:text-secondary transition-colors">
                  SuccessFactors
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="text-slate-300 hover:text-secondary transition-colors">
                  SAP Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-slate-300 hover:text-secondary transition-colors">
                  Cloud Migration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-slate-300 hover:text-secondary transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-slate-300">Hr@behaticonsulting.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:919790749488" className="text-slate-300 hover:text-secondary transition-colors">+91 9790749488</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:919789031769" className="text-slate-300 hover:text-secondary transition-colors">+91 9789031769</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-slate-300">Headquarters Office: E4, Resident Pere Laval, Quatre Bornes, Mauritius</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-secondary" />
                <span className="text-slate-300">BRN: C22188798</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-slate-300">Indian Office Branch: Behati Consulting Private Limited<br/> 
                363, 11th Cross, 6th Main, Vijaya Bank layout,<br/>  Bilekhalli, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Behati Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
