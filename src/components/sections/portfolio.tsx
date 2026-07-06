import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, ArrowRight, Calendar, Users, TrendingUp, Award } from 'lucide-react';
import portfolioMockup from '@/assets/portfolio-mockup.jpg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "TechStart E-commerce",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced filtering and seamless checkout experience.",
      image: portfolioMockup,
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      color: "from-blue-500 to-purple-600",
      details: {
        client: "TechStart Inc.",
        duration: "3 months",
        team: "4 developers",
        challenge: "The client needed a scalable e-commerce solution that could handle high traffic during sales events while providing an intuitive shopping experience.",
        solution: "We built a React-based frontend with Node.js backend, implementing advanced caching strategies and microservices architecture for optimal performance.",
        results: [
          "300% increase in conversion rate",
          "50% reduction in page load time",
          "45% increase in average order value",
          "99.9% uptime during peak sales"
        ],
        technologies: ["React 18", "Node.js", "MongoDB", "Redis", "Stripe API", "AWS"],
        testimonial: "PixelCraft delivered beyond our expectations. The new platform handles our traffic seamlessly and our sales have tripled!",
        live_url: "https://techstart-demo.com",
        github_url: "https://github.com/pixelcraft/techstart"
      }
    },
    {
      title: "Creative Agency Rebrand",
      category: "Branding",
      description: "Complete brand identity redesign including logo, website, and marketing materials.",
      image: portfolioMockup,
      tags: ["Branding", "UI/UX", "Web Design", "Print"],
      color: "from-purple-500 to-pink-600",
      details: {
        client: "Creative Studio Co.",
        duration: "2 months",
        team: "3 designers",
        challenge: "The agency needed a complete rebrand to attract higher-end clients and modernize their image in a competitive market.",
        solution: "We developed a sophisticated brand identity with a modern logo, comprehensive guidelines, and a stunning new website that showcases their work.",
        results: [
          "200% increase in qualified leads",
          "150% increase in project value",
          "90% client retention rate",
          "Featured in 5 design publications"
        ],
        technologies: ["Figma", "Adobe Creative Suite", "React", "Framer Motion"],
        testimonial: "The rebrand completely transformed our business. We're now attracting the clients we always wanted to work with.",
        live_url: "https://creativestudio-demo.com"
      }
    },
    {
      title: "FinTech Dashboard",
      category: "Web App", 
      description: "Comprehensive financial dashboard with real-time analytics and data visualization.",
      image: portfolioMockup,
      tags: ["React", "D3.js", "API", "Analytics"],
      color: "from-green-500 to-blue-600",
      details: {
        client: "FinanceFlow Ltd.",
        duration: "4 months",
        team: "5 developers",
        challenge: "Creating an intuitive dashboard for complex financial data while ensuring real-time performance and security compliance.",
        solution: "Built with React and D3.js for dynamic visualizations, implementing WebSocket connections for real-time updates and following strict financial regulations.",
        results: [
          "80% reduction in data analysis time",
          "99.99% uptime with real-time data",
          "100% compliance with financial regulations",
          "40% increase in user engagement"
        ],
        technologies: ["React", "D3.js", "WebSocket", "Node.js", "PostgreSQL", "Redis"],
        testimonial: "This dashboard revolutionized how we handle financial data. Our analysts are now 3x more productive.",
        live_url: "https://financeflow-demo.com"
      }
    },
    {
      title: "Restaurant Chain Website",
      category: "Website",
      description: "Multi-location restaurant website with online ordering and reservation system.",
      image: portfolioMockup,
      tags: ["WordPress", "PHP", "MySQL", "Mobile"],
      color: "from-orange-500 to-red-600",
      details: {
        client: "Bella Vista Restaurants",
        duration: "2.5 months",
        team: "3 developers",
        challenge: "Building a unified online presence for 15 restaurant locations with individual menus, ordering, and reservation systems.",
        solution: "Custom WordPress multisite setup with location-based ordering, integrated POS system, and centralized management dashboard.",
        results: [
          "250% increase in online orders",
          "180% boost in reservations", 
          "60% reduction in phone orders",
          "Unified brand across all locations"
        ],
        technologies: ["WordPress Multisite", "WooCommerce", "PHP", "MySQL", "Square API"],
        testimonial: "Our online presence is now as strong as our food. Customers love the convenience and we love the increased revenue!",
        live_url: "https://bellavista-demo.com"
      }
    },
    {
      title: "SaaS Landing Page",
      category: "Landing Page",
      description: "High-converting landing page design that increased sign-ups by 300%.",
      image: portfolioMockup,
      tags: ["Landing Page", "Conversion", "A/B Testing", "Analytics"],
      color: "from-indigo-500 to-purple-600",
      details: {
        client: "CloudSync Pro",
        duration: "1 month",
        team: "2 designers",
        challenge: "Poor conversion rates on existing landing page were limiting growth despite strong product-market fit.",
        solution: "Complete redesign with conversion-focused copywriting, A/B tested elements, and strategic social proof placement.",
        results: [
          "300% increase in sign-ups",
          "40% improvement in conversion rate",
          "150% more qualified leads",
          "25% reduction in bounce rate"
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Google Analytics", "Hotjar"],
        testimonial: "This landing page transformed our business growth. We went from struggling to convert visitors to having more leads than we can handle.",
        live_url: "https://cloudsync-demo.com"
      }
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile App", 
      description: "User-friendly healthcare app connecting patients with healthcare providers.",
      image: portfolioMockup,
      tags: ["React Native", "Healthcare", "HIPAA", "API"],
      color: "from-teal-500 to-green-600",
      details: {
        client: "HealthConnect",
        duration: "6 months",
        team: "6 developers",
        challenge: "Creating a secure, HIPAA-compliant mobile app that simplifies healthcare access while maintaining strict privacy standards.",
        solution: "React Native app with end-to-end encryption, biometric authentication, and seamless integration with existing healthcare systems.",
        results: [
          "50,000+ active users in first year",
          "95% user satisfaction rating",
          "100% HIPAA compliance maintained",
          "40% reduction in appointment no-shows"
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Twilio", "Stripe", "AWS"],
        testimonial: "This app has revolutionized how our patients interact with our practice. Both doctors and patients love the convenience.",
        live_url: "https://healthconnect-demo.com"
      }
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary text-sm font-medium">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Projects That 
            <span className="text-primary"> Make an Impact</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through thoughtful design and development.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-item group overflow-hidden border-0 shadow-soft">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`portfolio-overlay absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="text-white border-white/30 hover:bg-white/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Project Image */}
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Project Info Grid */}
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Client</p>
                              <p className="font-medium">{project.details.client}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Duration</p>
                              <p className="font-medium">{project.details.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Team Size</p>
                              <p className="font-medium">{project.details.team}</p>
                            </div>
                          </div>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2">Challenge</h4>
                            <p className="text-sm text-muted-foreground">{project.details.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Solution</h4>
                            <p className="text-sm text-muted-foreground">{project.details.solution}</p>
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                            Results
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {project.details.results.map((result, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Award className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.details.technologies.map((tech, idx) => (
                              <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="italic text-muted-foreground mb-2">"{project.details.testimonial}"</p>
                          <p className="text-sm font-medium text-primary">— {project.details.client}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          {project.details.live_url && (
                            <Button className="btn-primary text-white flex-1">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Live Site
                            </Button>
                          )}
                          <Button 
                            onClick={scrollToContact}
                            variant="outline" 
                            className="flex-1"
                          >
                            Discuss Similar Project
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="bg-background rounded-3xl p-8 md:p-12 text-center shadow-soft">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Want to See Detailed Case Studies?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dive deeper into our process and see the full story behind each project, 
            including challenges, solutions, and measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-white font-semibold px-6 py-3">
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="btn-secondary border-border hover:bg-primary hover:text-primary-foreground px-6 py-3"
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;