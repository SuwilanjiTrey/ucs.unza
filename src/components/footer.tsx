import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">UNZA CS Society</h3>
            <p className="text-sm text-muted-foreground">
              Empowering future tech leaders through innovation, collaboration, and
              excellence.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-primary">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} UNZA Computer Science Society. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

