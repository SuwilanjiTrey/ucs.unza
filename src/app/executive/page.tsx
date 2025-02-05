"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AlumniSection from "./alumni";

export default function ExecutivePage() {
  const executives = [
    {
      name: "John Doe",
      position: "President",
      image: "/placeholder.svg",
      bio: "Computer Science final year student with a passion for AI and machine learning.",
      email: "john@example.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      image: "/placeholder.svg",
      bio: "Software Engineering student focused on web development and UI/UX design.",
      email: "jane@example.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mike Johnson",
      position: "Secretary",
      image: "/placeholder.svg",
      bio: "Third-year student specializing in cybersecurity and network administration.",
      email: "mike@example.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Sarah Williams",
      position: "Treasurer",
      image: "/placeholder.svg",
      bio: "Final year student with experience in project management and finance.",
      email: "sarah@example.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "David Brown",
      position: "Events Coordinator",
      image: "/placeholder.svg",
      bio: "Third-year student passionate about organizing tech events and workshops.",
      email: "david@example.com",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Lisa Anderson",
      position: "Technical Lead",
      image: "/placeholder.svg",
      bio: "Final year student specializing in full-stack development and cloud computing.",
      email: "lisa@example.com",
      linkedin: "#",
      github: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % executives.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [executives.length]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary">
            Meet Our Executive Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground">
            Get to know the dedicated individuals leading the UNZA Computer
            Science Society.
          </p>
        </div>
      </section>

      {/* Executive Carousel */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex justify-center items-center min-h-[500px] relative">
            <AnimatePresence initial={false}>
              {[-1, 0, 1].map((offset) => {
                const effectiveIndex = (index + offset + executives.length) % executives.length;
                const executive = executives[effectiveIndex];
                
                return (
                  <motion.div
                    key={effectiveIndex}
                    custom={offset}
                    initial={{ 
                      x: offset === 1 ? 1000 : offset === -1 ? -1000 : 0,
                      scale: 0.9,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: offset * 400,
                      scale: offset === 0 ? 1.1 : 0.9,
                      opacity: offset === 0 ? 1 : 0.5,
                      zIndex: offset === 0 ? 1 : 0
                    }}
                    exit={{
                      x: direction === 1 ? -1000 : 1000,
                      scale: 0.9,
                      opacity: 0
                    }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.8 }
                    }}
                    className="absolute w-96"
                  >
                    <Card className="overflow-hidden shadow-lg">
                      <CardHeader className="p-0">
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={executive.image}
                            alt={executive.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4 text-center">
                          <h2 className="text-2xl font-bold">{executive.name}</h2>
                          <p className="text-primary">{executive.position}</p>
                          <p className="text-foreground">{executive.bio}</p>
                          <div className="flex justify-center space-x-4">
                            <Link
                              href={`mailto:${executive.email}`}
                              className="text-muted-foreground hover:text-primary"
                            >
                              <Mail className="h-5 w-5" />
                            </Link>
                            <Link
                              href={executive.linkedin}
                              className="text-muted-foreground hover:text-primary"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link
                              href={executive.github}
                              className="text-muted-foreground hover:text-primary"
                            >
                              <Github className="h-5 w-5" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AlumniSection />

      {/* Contact CTA */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
  <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Get in Touch with Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground">
            Have questions or want to learn more about the society? Feel free to
            reach out to any of our executive members.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="mailto:info@unzacssociety.org"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
            
          </div>
        </div>
        
      </section>
    </div>
  );
}