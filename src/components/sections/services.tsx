import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Palette, 
  Code, 
  ShoppingCart, 
  TrendingUp, 
  Smartphone, 
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Responsive Web Design",
      description: "Custom websites that look stunning on every device, built with modern technologies and optimized for performance.",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized", "Cross-Browser Compatible"],
      color: "text-primary",
      details: {
        price: "Starting at $2,500",
        duration: "2-4 weeks",
        includes: ["Custom Design", "Responsive Layout", "Basic SEO", "Contact Forms", "Social Integration"],
        testimonial: "PixelCraft delivered exactly what we needed - a beautiful, fast website that converts visitors into customers.",
        rating: 5
      }
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & UI/UX Design",
      description: "Complete brand identity and user experience design that tells your story and engages your audience.",
      features: ["Logo Design", "Brand Guidelines", "User Research", "Wireframing"],
      color: "text-secondary",
      details: {
        price: "Starting at $1,800",
        duration: "1-3 weeks",
        includes: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Business Cards"],
        testimonial: "The branding transformed our business. We look professional and our customers trust us more.",
        rating: 5
      }
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Websites",
      description: "Powerful online stores that drive sales with seamless user experiences and secure payment processing.",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Mobile Commerce"],
      color: "text-primary",
      details: {
        price: "Starting at $4,500",
        duration: "4-8 weeks",
        includes: ["Custom Store Design", "Payment Gateway", "Product Catalog", "Order Management", "SSL Security"],
        testimonial: "Our online sales increased by 300% after launching the new e-commerce site. Amazing results!",
        rating: 5
      }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Digital Strategy",
      description: "Comprehensive digital strategies that boost your online visibility and drive qualified traffic.",
      features: ["Keyword Research", "Content Strategy", "Analytics", "Performance Tracking"],
      color: "text-secondary",
      details: {
        price: "Starting at $1,200/month",
        duration: "Ongoing",
        includes: ["SEO Audit", "Keyword Research", "Content Strategy", "Link Building", "Monthly Reports"],
        testimonial: "We're now ranking #1 for our main keywords and getting 5x more organic traffic than before.",
        rating: 5
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-secondary text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Everything You Need to 
            <span className="text-secondary"> Succeed Online</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide end-to-end digital solutions that help 
            your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card p-8 border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`${service.color} bg-gradient-subtle p-3 rounded-xl flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="mt-4 p-0 h-auto text-primary hover:text-primary-dark group"
                      >
                        Learn More 
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80" side="top">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="font-medium text-primary">{service.details.price}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{service.details.duration}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">What's included:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.details.includes.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center space-x-1 mb-2">
                            {Array.from({ length: service.details.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xs italic text-muted-foreground">"{service.details.testimonial}"</p>
                        </div>

                        <GradientButton 
                          onClick={scrollToContact}
                          className="w-full"
                        >
                          Get Started
                        </GradientButton>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Process</h3>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements" },
              { step: "02", title: "Strategy", description: "Crafting a comprehensive plan and roadmap" },
              { step: "03", title: "Design", description: "Creating beautiful, functional designs that convert" },
              { step: "04", title: "Launch", description: "Delivering your project and ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-white font-semibold px-8 py-3"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;