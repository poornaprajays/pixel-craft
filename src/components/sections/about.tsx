import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import teamWorkspace from '@/assets/team-workspace.jpg';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "User-Focused Design",
      description: "Every design decision is made with your users in mind, ensuring exceptional experiences that drive results."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Creative Innovation",
      description: "We push boundaries and explore new possibilities to create unique digital solutions that stand out."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborative Process",
      description: "We work closely with you throughout the entire process, ensuring your vision comes to life perfectly."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Quality Excellence",
      description: "Our commitment to quality ensures every project exceeds expectations and delivers lasting value."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary text-sm font-medium">About PixelCraft</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Digital Excellence 
              <span className="text-primary"> Since 2019</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're a passionate team of designers, developers, and strategists who believe 
              great design has the power to transform businesses. Our journey began with a 
              simple mission: to help brands create meaningful connections with their audiences 
              through exceptional digital experiences.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">Expertise in modern web technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">User-centered design approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                <span className="text-foreground">Data-driven optimization strategies</span>
              </div>
            </div>

            <Button 
              onClick={scrollToContact}
              className="btn-primary text-white font-semibold px-6 py-3"
            >
              Work With Us
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={teamWorkspace}
                alt="Creative workspace with team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 p-6 glass-card border-none">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">250+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </Card>

            {/* Floating Award Card */}
            <Card className="absolute -top-8 -right-8 p-4 glass-card border-none">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-sm font-semibold">Award Winner</div>
                  <div className="text-xs text-muted-foreground">Best Agency 2023</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, ensuring we deliver exceptional 
              results that exceed your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-subtle rounded-xl flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;