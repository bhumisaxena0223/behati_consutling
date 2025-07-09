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
        <a
          href="tel:919790749488"
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      </body>
    </html>
  )
}
