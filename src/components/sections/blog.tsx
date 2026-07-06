import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Web Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=300&fit=crop",
      tags: ["Trends", "UI/UX", "Design"]
    },
    {
      title: "The Psychology of Color in Web Design",
      excerpt: "Learn how color choices impact user behavior and conversion rates in your web design projects.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=300&fit=crop",
      tags: ["Color Theory", "Psychology", "Conversion"]
    },
    {
      title: "Building Accessible Websites: A Complete Guide",
      excerpt: "Essential guidelines for creating websites that are accessible to all users, including those with disabilities.",
      author: "Emily Johnson",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=300&fit=crop",
      tags: ["Accessibility", "WCAG", "Inclusive Design"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-secondary text-sm font-medium">Latest Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Design Insights & 
            <span className="text-secondary"> Industry Trends</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest web design trends, tips, and strategies 
            from our team of experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark group">
                    Read More 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-primary text-white font-semibold px-8 py-3">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;