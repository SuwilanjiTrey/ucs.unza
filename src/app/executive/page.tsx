"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";
import AlumniSection from "./alumni";

export default function ExecutivePage() {
  const executives = [
    {
      name: "Chibwanta Jake Mukonka",
      position: "President",
      image: "/execs/jake.jpeg",
      bio: "Computer Science final year student with a passion for systems engineering, AI and machine learning.",
      email: "cjmukonka@gmail.com",
      linkedin: "http://www.linkedin.com/in/chibwanta-mukonka-92663a290",
      github: "https://github.com/JakeSparrow1",
    },
    {
      name: "Hellen Zulu",
      position: "Vice President",
      image: "/execs/hellen.png",
      bio: "Software Engineering student focused on web development and UI/UX design.",
      email: "hellenzulu004@gmail.com",
      linkedin: "https://www.linkedin.com/in/hellen-zulu-9a6a83234",
      github: "https://github.com/hellen004",
    },
    {
      name: "Nephas Gomezyani Kango",
      position: "Secretary",
      image: "/execs/nephas.jpg",
      bio: "Final-year student specializing in software engineering and full stack development.",
      email: "Nephaskango@gmail.com",
      linkedin: "https://www.linkedin.com/in/nephas-kango-0676b2216/",
      github: "https://github.com/nephas10",
    },
    {
      name: "Faith selita Nambule",
      position: "Treasurer",
      image: "/execs/faith.jpg",
      bio: "Final year cyber-security and netwroking student with experience in project management and finance.",
      email: "selitafn@gmail.com",
      linkedin: "https://www.linkedin.com/in/faith-nambule-545b96298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "#",
    },
    {
      name: "Enos Malunga",
      position: "Events and Project Coordinator",
      image: "/execs/enos.jpg",
      bio: "Third-year student passionate about organizing tech events and workshops.",
      email: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Deborah Nyirenda",
      position: "Web master",
      image: "/execs/deborah.jpg",
      bio: "Third year student specializing in full-stack development and cloud computing.",
      email: "nyirendadeborahbupe126@gmail.com",
      linkedin: "http://linkedin.com/in/deborah-bupe-nyirenda-663370351",
      github: "https://github.com/deborah-bupe",
    },
	{
      name: "Stanley Kalenga",
      position: "Publicity Secretary",
      image: "/execs/stanley_kalenga.jpeg",
      bio: "Final year student specializing cyber security and networking.",
      email: "stanleykalenga4@gmail.com",
      linkedin: "https://www.linkedin.com/in/stanley-kalenga-265b08266?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdc0%2B6ltXS9iZkvbA5F0Wow%3D%3D",
      github: "#",
    },

{
      name: "Mwiza Marie Mfuni",
      position: "Commitee member",
      image: "/execs/mwiza.jpg",
      bio: "Final year student specializing cyber security and networking.",
      email: "#",
      linkedin: "https://www.linkedin.com/in/mwiza-mfuni-a78a29263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "#",
    },

{
      name: "Peter K. Lubasi",
      position: "Commitee member",
      image: "/execs/peter.jpg",
      bio: "Final year student specializing cyber security and networking.",
      email: "peterklubasi68@gmail.com",
      linkedin: "https://www.linkedin.com/in/peter-k-lubasi-801103335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "#",
    },

  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % executives.length);
    }, 6000);   //change how long an image stays on the screen 10,000 = 10sec e.t.c
    return () => clearInterval(interval);
  }, [executives.length]);

const getCardStyles = (offset: number): MotionStyle => ({
  position: 'absolute' as const,
  width: isMobile ? '85%' : '24rem',
  left: isMobile ? '8%' : '35%',  // This line changes the left position based on device type
  transform: `translateX(-50%)`,
  zIndex: offset === 0 ? 1 : 0,
});

  const getMotionProps = (offset: number) => ({
    initial: {
      x: offset === 1 ? 300 : offset === -1 ? -300 : 0,
      scale: 0.95,
      opacity: 0,
    },
    animate: {
      x: isMobile ? offset * 150 : offset * 400,
      scale: offset === 0 ? 1 : 0.85,
      opacity: offset === 0 ? 1 : isMobile ? 0 : 0.5,
    },
    exit: {
      x: direction === 1 ? -300 : 300,
      scale: 0.9,
      opacity: 0,
    },
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.8 }, //trnsition speed between images
    },
  });


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary font-display">
            Meet Our Executive Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground font-sans">
            Get to know the dedicated individuals leading the UNZA Computer
            Science Society.
          </p>
        </div>
      </section>

{/* Executive Carousel */}
<section className="py-6 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-center items-center min-h-[500px] relative overflow-hidden">
          <AnimatePresence initial={false}>
            {[-1, 0, 1].map((offset) => {
              const effectiveIndex = (index + offset + executives.length) % executives.length;
              const executive = executives[effectiveIndex];

              return (
                <motion.div
                  key={effectiveIndex}
                  style={getCardStyles(offset)}
                  {...getMotionProps(offset)}
                  className="carousel-card"
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
                        <h2 className="text-2xl font-bold font-display">{executive.name}</h2>
                        <p className="text-primary font-sans">{executive.position}</p>
                        <p className="text-foreground text-sm md:text-base font-sans">
                          {executive.bio}
                        </p>
                        <div className="flex justify-center space-x-4">
                          <Link
                            href={`mailto:${executive.email}`}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`Email ${executive.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={executive.linkedin}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`LinkedIn profile of ${executive.name}`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={executive.github}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`GitHub profile of ${executive.name}`}
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
          
          <h2 className="text-3xl font-bold sm:text-4xl text-primary font-display">
            Get in Touch with Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground font-sans">
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