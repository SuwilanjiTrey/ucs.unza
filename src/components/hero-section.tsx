import React from 'react';
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
 return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Pattern Layer 1 - Scrolling Right */}
      <div className="absolute inset-0 flex animate-scroll-right">
        <div className="flex-none w-full bg-pattern opacity-100" />
        <div className="flex-none w-full bg-pattern opacity-100" />
        <div className="flex-none w-full bg-pattern opacity-100" />
      </div>

      
      {/* Gradient Overlay at 45 degrees covering 3/4 ---adjustable*/}
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent"
           style={{
             background: `linear-gradient(315deg, 
               hsl(var(--background)) 0%,
               hsl(var(--background)) 55%,
               transparent 100%
             )`
           }}
      /> 

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-12 z-10">
        <div className="text-center space-y-10">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-4">
              <Image 
                src="/logo.png"
                alt="UNZA CS Logo"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
              <h2 className="font-display text-2xl font-bold text-[#2C8992]">Welcome to</h2>
            </div>
            
            <h1 className="font-display text-4xl font-bold sm:text-6xl lg:text-7xl bg-gradient-to-r from-[#2C8992] to-[#FF9000] bg-clip-text text-transparent">
              UNZA Computer Society
              </h1>
            
          </div>

          <p className= "font-sans mx-auto max-w-3xl text-lg sm:text-xl text-foreground leading-relaxed">
            Empowering students to innovate, collaborate, and excel in the world of
            technology. Join us in shaping the future of computing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button 
              asChild 
              size="lg"
              className="bg-[#2C8992] hover:bg-[#2C8992]/90 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/join" className="font-mono flex items-center gap-2">
                Join Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="font-mono border-[#2C8992] text-[#2C8992] hover:bg-[#2C8992]/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}