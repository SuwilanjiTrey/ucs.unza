import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AlumniSection = () => {
  const alumni = [
    {
      name: "Daliso Miti",
      graduationYear: "2025",
      currentRole: "Software Engineer",
      image: "/execs/daliso miti.jpeg",
      contribution: "Founded the society's annual hackathon",
      email: "#",
      linkedin: "https://www.linkedin.com/in/daliso-miti-805b8323a/",
      github: "#"
    },
    {
      name: "Waza McDonald Banda",
      graduationYear: "2025",
      currentRole: "Software Developer at MyCab zambia",
      image: "/execs/waza.jpg",
      contribution: "Established tutoring program",
      email: "#",
      linkedin: "https://www.linkedin.com/in/waza-banda-a0aa451b4/",
      github: "#"
    },
    {
      name: "Wakung'uma Nyambe III",
      graduationYear: "2024",
      currentRole: "Tech Lead at Amazon",
      image: "/execs/wakunguma.jpg",
      contribution: "UCS President",
      email: "#",
      linkedin: "https://www.linkedin.com/in/wakung-uma-nyambe-iii-4a1502237/",
      github: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Distinguished Alumni
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground font-display">
            Meet our former society members who have gone on to achieve remarkable success in their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus) => (
            <Card key={alumnus.name} className="transition-transform hover:scale-[1.02]">
              <CardHeader className="p-0">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={alumnus.image}
                    alt={alumnus.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold font-display">{alumnus.name}</h3>
                  <p className="text-primary text-sm font-sans">Class of {alumnus.graduationYear}</p>
                </div>
                <p className="text-foreground font-medium font-sans">{alumnus.currentRole}</p>
                <p className="text-muted-foreground text-sm font-sans">{alumnus.contribution}</p>
                <div className="flex space-x-4 pt-2">
                  <Link
                    href={`mailto:${alumnus.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                  <Link
                    href={alumnus.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={alumnus.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;