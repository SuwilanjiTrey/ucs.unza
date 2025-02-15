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
          <h1 className="text-4xl font-bold sm:text-6xl text-primary font-display">About Us</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground font-sans">
            Learn about our journey, mission, and the impact we&#39;re making in the
            tech community at the University of Zambia.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary font-display">Our History</h2>
            <div className="space-y-4 text-foreground font-sans">
              <p>
                
The University Computer Science Society (UCS) was founded with a vision to create a thriving community for students passionate about technology, innovation, and problem-solving. What started as a small group of tech enthusiasts has grown into a dynamic organization that fosters learning, collaboration, and professional growth.  

              </p>
              <p>
                 

Over the years, UCS has played a pivotal role in equipping students with essential skills through workshops, hackathons, mentorship programs, and networking opportunities. We bridge the gap between academia and industry, ensuring that our members are prepared for the ever-evolving tech landscape.  


              </p>
              <p>
Today, UCS continues to be the hub for all things tech, welcoming students from diverse backgrounds and interests within computer science. Whether you're into software development, cybersecurity, AI, networking, or Compuer Systems, UCS provides the platform to learn, innovate, and connect.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/execs/ucs.jpg" alt="History of UCS" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-3 text-center font-sans">
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
          <h2 className="text-3xl font-bold sm:text-4xl text-primary font-display">Our Milestones</h2>
          <p className="text-lg text-foreground font-sans">Key achievements and moments in our journey</p>
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
          <h2 className="text-3xl font-bold sm:text-4xl text-primary font-display">Be Part of Our Story</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground font-sans">
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
