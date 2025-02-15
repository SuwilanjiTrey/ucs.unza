import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Search } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function BlogPage() {
  const categories = ["All", "News", "Tutorials", "Events", "Research", "Technology"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary font-display">Blog & Articles</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground font-sans">
            Stay updated with the latest news, tutorials, and insights from the UNZA Computer Science Society.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.toLowerCase()} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Alert className="bg-muted">
            <AlertDescription className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Blog Posts Coming Soon!</h2>
              <p className="text-muted-foreground">
                We&#39;re currently working on amazing content for you. Check back soon for the latest articles, 
                tutorials, and updates from the UNZA Computer Science Society.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
};