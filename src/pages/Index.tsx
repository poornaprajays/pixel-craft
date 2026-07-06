import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { Link } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Menu } from 'lucide-react';
import AppSidebar from '@/components/app-sidebar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Testimonials from '@/components/sections/testimonials';
import CTABanner from '@/components/sections/cta-banner';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import Chatbot from '@/components/ui/chatbot';

const Index = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Header with Sidebar Toggle */}
          <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-6">
            <SidebarTrigger className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </SidebarTrigger>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Log in</Link>
              <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign up</Link>
              <GradientButton 
                onClick={scrollToContact}
                className="hidden sm:inline-flex"
              >
                Get Started
              </GradientButton>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <CTABanner />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <Chatbot />
    </SidebarProvider>
  );
};

export default Index;
