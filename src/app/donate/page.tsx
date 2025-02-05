//import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Trophy, GraduationCap, Users } from "lucide-react";

export default function DonatePage() {
  const donationTiers = [
    {
      amount: "25",
      title: "Supporter",
      description: "Help fund our weekly workshops and learning resources",
    },
    {
      amount: "50",
      title: "Champion",
      description: "Support our hackathons and coding competitions",
    },
    {
      amount: "100",
      title: "Patron",
      description: "Fund scholarships and learning opportunities",
    },
    {
      amount: "custom",
      title: "Custom Amount",
      description: "Choose your own contribution amount",
    },
  ];

  const impactStats = [
    {
      icon: Users,
      title: "500+",
      description: "Students Impacted",
    },
    {
      icon: Trophy,
      title: "20+",
      description: "Events Organized",
    },
    {
      icon: GraduationCap,
      title: "50+",
      description: "Scholarships Awarded",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold sm:text-6xl text-primary">Support Our Mission</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground">
            Your donation helps us empower the next generation of tech leaders through education, resources, and opportunities.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3 text-center">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-background border">
              <CardHeader>
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-4xl font-bold text-primary">{stat.title}</CardTitle>
                <CardDescription className="text-foreground">{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">Make a Donation</CardTitle>
              <CardDescription className="text-foreground">
                Choose an amount to support our initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <RadioGroup defaultValue="25">
                  <div className="grid gap-4 md:grid-cols-2">
                    {donationTiers.map((tier) => (
                      <Label
                        key={tier.amount}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem value={tier.amount} id={tier.amount} className="sr-only" />
                        <div className="text-center space-y-2">
                          {tier.amount === "custom" ? (
                            <Input type="number" placeholder="Enter amount" className="w-24 text-center" />
                          ) : (
                            <span className="text-2xl font-bold text-primary">${tier.amount}</span>
                          )}
                          <div>
                            <div className="font-medium text-primary">{tier.title}</div>
                            <div className="text-sm text-foreground">{tier.description}</div>
                          </div>
                        </div>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <Label htmlFor="name" className="text-primary">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background border" />
                    <Label htmlFor="email" className="text-primary">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background border" />
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                    Donate Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
