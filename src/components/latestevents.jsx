import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const LatestEventsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Recent Events</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with our recent and upcoming activities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* React Workshop Event */}
          <div className="group relative overflow-hidden rounded-lg border bg-background">
            <Image
              src="/execs/devfest.jpg"
              alt="DEV FEST 2024"
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dev Fest 2024</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Developer tech expo to learn and grow in the industry of tech
              </p>
              <Button variant="outline" asChild>
                <Link href="/events/react-workshop" className="inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* AI Hackathon Event */}
          <div className="group relative overflow-hidden rounded-lg border bg-background">
            <Image
              src="/execs/devx.jpg"
              alt="AI Hackathon Event"
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dev X</h3>
              <p className="text-sm text-muted-foreground mb-4">
                48-hour challenge to build cutting-edge AI applications
              </p>
              <Button variant="outline" asChild>
                <Link href="/events/ai-hackathon" className="inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Cloud Computing Event */}
          <div className="group relative overflow-hidden rounded-lg border bg-background">
            <Image
              src="/execs/gamedev.jpg"
              alt="Cloud Computing Seminar"
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Game Dev expo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Game developers day where relaxation and innovation is enjoyed 
              </p>
              <Button variant="outline" asChild>
                <Link href="/events/cloud-summit" className="inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEventsSection;