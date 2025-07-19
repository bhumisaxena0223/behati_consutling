import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Behati Consulting - SAP Excellence & Digital Transformation",
  description:
    "Transform your business with world-class SAP solutions. Expert consulting for S/4HANA, SuccessFactors, Analytics, and more.",
  keywords: "SAP consulting, S/4HANA implementation, SuccessFactors, SAP Analytics, digital transformation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Floating Phone Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="group relative">
            <button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
              aria-label="Call us"
            >
              <Phone className="h-6 w-6" />
            </button>
            
            {/* Phone Numbers Dropdown */}
            <div className="absolute bottom-0 right-0 pb-16 pr-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white rounded-lg shadow-lg border p-2 min-w-48">
                <div className="text-sm font-semibold text-gray-700 mb-2 px-2">Call us:</div>
                <a
                  href="tel:919790749488"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  +91 9790749488
                </a>
                <a
                  href="tel:919789031769"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  +91 9789031769
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
