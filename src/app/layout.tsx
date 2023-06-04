import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"
import "./globals.css"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Udyog",
  ],
  authors: [
    {
      name: "Deveesh Shetty",
      url: "https://deveesh.vercel.app",
    },
  ],
  creator: "Deveesh Shetty",
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "Deveesh Shetty",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto py-4 min-h-[300vh] bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white antialiased `}
      >
        <Navbar />
        {children}

        {/* Indicating the size of the screen */}
        <TailwindIndicator />

        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  )
}
