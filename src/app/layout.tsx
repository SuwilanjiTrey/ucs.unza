// layout.tsx
import '@/app/globals.css'  // Try this import
import '../app/globals.css' // And this one

// Rest of your layout.tsx code...
// app/layout.tsx
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>UNZA Computer Science Society</title>
        <meta name="description" content="Welcome to the University of Zambia Computer Science Society - Empowering future tech leaders" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}