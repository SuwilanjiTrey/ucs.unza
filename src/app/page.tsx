import { HeroSection } from "@/components/hero-section"
import { FAQSection } from "@/components/faq-section"
import { SignUpSection } from "@/components/sign-up-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Users, Calendar, Trophy } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Technical Workshops</h3>
              <p className="text-muted-foreground">
                Hands-on learning experiences with the latest technologies
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Networking Events</h3>
              <p className="text-muted-foreground">
                Connect with industry professionals and fellow tech enthusiasts
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Regular Meetups</h3>
              <p className="text-muted-foreground">
                Weekly gatherings to discuss trends and share knowledge
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Competitions</h3>
              <p className="text-muted-foreground">
                Showcase your skills in hackathons and coding challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Latest Events</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our recent and upcoming activities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/placeholder.svg"
                  alt="Event thumbnail"
                  width={400}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tech Workshop {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join us for an exciting workshop on the latest technologies
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/events" className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <SignUpSection />
    </div>
  )
}

