import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const categories = ["All", "News", "Tutorials", "Events", "Research", "Technology"];
  
  const posts = [
    {
      title: "Introduction to Machine Learning",
      excerpt: "Learn the basics of machine learning and how it's shaping our future...",
      category: "Tutorials",
      author: "John Doe",
      date: "March 15, 2024",
      image: "/placeholder.svg",
      slug: "intro-to-ml",
    },
    {
      title: "Upcoming Hackathon 2024",
      excerpt: "Join us for our annual hackathon and showcase your coding skills...",
      category: "Events",
      author: "Jane Smith",
      date: "March 10, 2024",
      image: "/placeholder.svg",
      slug: "hackathon-2024",
    },
    {
      title: "Web Development Best Practices",
      excerpt: "Discover the latest trends and best practices in web development...",
      category: "Tutorials",
      author: "Mike Johnson",
      date: "March 5, 2024",
      image: "/placeholder.svg",
      slug: "web-dev-practices",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary">Blog & Articles</h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground">
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

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="group flex flex-col overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex-1 p-6">
                  <div className="space-y-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h2 className="text-2xl font-bold leading-tight text-primary">{post.title}</h2>
                    <p className="text-foreground">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
