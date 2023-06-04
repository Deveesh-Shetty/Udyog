import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Udyog",
  description: "Udyog - Towards Success through e-commerce",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto py-4 min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white antialiased `}
      >
        {children}

        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden"></div>
      </body>
    </html>
  )
}
