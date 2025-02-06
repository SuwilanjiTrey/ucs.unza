import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

//where you see... this "&#39;" thats an apostrophe, aparently next.js doesnt like playing nice with jsx files
//so remember, this ->   > ' <  ===  &#39;
 
export default function ProjectsPage() {
  const projects = [
    {
      title: "Student Portal App",
      description:
        "A mobile application for UNZA students to access academic resources and campus information.",
      image: "/placeholder.svg",
      tags: ["React Native", "Node.js", "MongoDB"],
      status: "In Progress",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Study Assistant",
      description:
        "An AI-powered platform helping students with study materials and exam preparation.",
      image: "/placeholder.svg",
      tags: ["Python", "TensorFlow", "Flask"],
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      title: "Campus Events Platform",
      description:
        "A web platform for managing and discovering campus events and activities.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Prisma"],
      status: "In Progress",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary">Our Projects</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground">
            Discover the innovative projects developed by our members and get involved in shaping the future of technology.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/projects/propose">Propose a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="/join">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-background border">
              <CardHeader className="p-0">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover rounded-t-lg" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <CardTitle className="mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10" asChild>
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10" asChild>
                    <Link href={project.demo}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Proposal Section */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">Have a Project Idea?</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground">
            We&#39;re always looking for new and innovative project ideas. Share your vision with us and let&#39;s bring it to life together.
          </p>
          <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
            <Link href="/projects/propose">Submit Your Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
