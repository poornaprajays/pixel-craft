import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowUp 
} from 'lucide-react';
import { Boxes } from '@/components/ui/background-boxes';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    'Web Design & Development',
    'E-commerce Solutions',
    'Brand Identity Design',
    'UI/UX Design',
    'SEO & Digital Marketing',
    'Mobile App Design'
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Boxes />
        {/* Dynamic lighting overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/70 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        {/* Floating light effects */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PC</span>
                </div>
                <span className="text-2xl font-bold text-accent-foreground">PixelCraft</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creating digital experiences that inspire, engage, and drive results. 
                Your vision, our expertise, exceptional outcomes.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollToSection('#testimonials')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a 
                      href="mailto:hello@pixelcraft.agency" 
                      className="text-accent-foreground hover:text-primary transition-colors"
                    >
                      hello@pixelcraft.agency
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-accent-foreground hover:text-primary transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Address</p>
                    <p className="text-accent-foreground">
                      123 Design Street<br />
                      Creative City, CC 12345
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-white font-semibold w-full mt-6"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 PixelCraft Design Studio. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;