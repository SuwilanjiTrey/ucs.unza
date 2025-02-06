import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Users2, Lightbulb } from "lucide-react";

//where you see... this "&#39;" thats an apostrophe, aparently next.js doesnt like playing nice with jsx files
//so remember, this ->   > ' <  ===  &#39;

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary">About Us</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground">
            Learn about our journey, mission, and the impact we&#39;re making in the
            tech community at the University of Zambia.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our History</h2>
            <div className="space-y-4 text-foreground">
              <p>
                Founded in 2010, the UNZA Computer Science Society began as a
                small group of passionate students who wanted to create a
                community for tech enthusiasts.
              </p>
              <p>
                Over the years, we&#39;ve grown into one of the most active and
                influential student organizations at UNZA, hosting numerous
                events, workshops, and initiatives that have impacted hundreds of
                students.
              </p>
              <p>
                Today, we continue to evolve and adapt to the changing landscape
                of technology, while maintaining our core mission of empowering
                students in their tech journey.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/history-image.jpg" alt="History of UCS" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-3 text-center">
          {[{ icon: Target, title: "Our Mission", text: "To foster a vibrant community of tech enthusiasts and empower students with the knowledge and skills needed to excel in the field of computer science." },
            { icon: Lightbulb, title: "Our Vision", text: "To be the leading student organization in technology innovation and learning, creating opportunities for growth and excellence in computer science." },
            { icon: Users2, title: "Our Values", text: "Innovation, collaboration, inclusivity, and continuous learning form the cornerstone of our society's culture and activities." }].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-foreground">{item.text}</p>
              </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">Our Milestones</h2>
          <p className="text-lg text-foreground">Key achievements and moments in our journey</p>
          <div className="space-y-8">
            {[{ year: "2010", title: "Society Founded", description: "Establishment of the UNZA Computer Science Society with 20 founding members." },
              { year: "2015", title: "First Tech Conference", description: "Successfully organized the first student-led tech conference at UNZA." },
              { year: "2018", title: "Industry Partnerships", description: "Established partnerships with leading tech companies for internships and mentorship." },
              { year: "2020", title: "Virtual Learning Initiative", description: "Launched online workshops and events reaching over 1000 students." },
              { year: "2023", title: "Innovation Hub", description: "Opened a dedicated space for members to work on projects and collaborate." }].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="md:w-32 flex-shrink-0">
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-center text-primary font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-primary">{milestone.title}</h3>
                  <p className="text-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">Be Part of Our Story</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground">
            Join us in shaping the future of technology at UNZA. Together, we can create amazing opportunities and drive innovation.
          </p>
          <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
            <Link href="/join">
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
