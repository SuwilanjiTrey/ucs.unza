"use client"; // ✅ This makes the file a Client Component

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

//where you see... this "&#39;" thats an apostrophe, aparently next.js doesnt like playing nice with jsx files
//so remember, this ->   > ' <  ===  &#39;

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/40 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-white">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-white/90">
            Have questions about the UNZA Computer Science Society? We&#39;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-6 shadow-lg">
              <CardContent className="space-y-6">
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />
                  </div>
                  <Input type="email" placeholder="Email Address" required />
                  <Input placeholder="Subject" required />
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px]" 
                    required 
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@unzacssociety.org" className="text-teal-600 hover:underline">
                          info@unzacssociety.org
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+260978123456" className="text-teal-600 hover:underline">
                          +260 978 123 456
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">
                          School of Natural Sciences, UNZA Great East Road Campus
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-teal-100 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}