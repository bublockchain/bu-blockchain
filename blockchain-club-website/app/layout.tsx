import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import { Header } from "@/components/header"
import "./globals.css"

export const metadata: Metadata = {
  title: "BU Blockchain",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: "/bublogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`font-sans bg-background text-foreground ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="radial-gradient-bg" />
        <Header />
        <Suspense fallback={null}>
          <PageTransition>
            {children}
          </PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
