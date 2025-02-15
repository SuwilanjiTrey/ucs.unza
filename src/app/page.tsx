import { HeroSection } from "@/components/hero-section"
import { FAQSection } from "@/components/faq-section"
import { SignUpSection } from "@/components/sign-up-section"
import LatestEventsSection from "@/components/latestevents"

import { Code2, Users, Calendar, Trophy } from 'lucide-react'




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

      <LatestEventsSection />

      <FAQSection />
      <SignUpSection />
    </div>
  )
}

