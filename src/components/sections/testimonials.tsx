import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechStart Inc.",
      company: "TechStart",
      content: "PixelCraft transformed our vision into a stunning reality. Their attention to detail and user experience expertise resulted in a 300% increase in our conversion rates.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      position: "Founder, Creative Studios",
      company: "Creative Studios",
      content: "Working with PixelCraft was a game-changer for our business. They didn't just build us a website; they crafted a digital experience that truly represents our brand.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      position: "Marketing Director, RetailPlus",
      company: "RetailPlus",
      content: "The team's professionalism and creativity exceeded our expectations. Our new e-commerce platform has driven a 250% increase in online sales within the first quarter.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      content: "PixelCraft delivered a sophisticated dashboard that perfectly balances functionality with beautiful design. Our users love the intuitive interface they created.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      position: "Owner, Wellness Clinic",
      company: "Wellness Clinic",
      content: "From the initial consultation to the final launch, PixelCraft was professional, responsive, and incredibly talented. They brought our healthcare platform to life beautifully.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-secondary text-sm font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            What Our Clients 
            <span className="text-secondary"> Say About Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            working with PixelCraft and the results we've delivered together.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 text-center border-border/50 shadow-soft">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex flex-col items-center space-y-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-gradient-primary"
              />
              
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-sm text-primary font-medium">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              
              <StarRating rating={testimonials[currentTestimonial].rating} />
            </div>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border-border/50">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
              
              <StarRating rating={testimonial.rating} />
              
              <blockquote className="text-muted-foreground mt-4 leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </blockquote>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '50+', label: 'Happy Clients' },
            { number: '250+', label: 'Projects Completed' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;