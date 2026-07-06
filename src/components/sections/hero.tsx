import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import { useEffect, useRef, useState } from 'react';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  // Parallax state for subtle movement
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5; // -0.5..0.5
    setParallax({ x: relX, y: relY });
  };

  // Count-up animation for stats when in view
  const [animateStats, setAnimateStats] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [250, 98, 50, 5];
  const suffixes = ['+', '%', '+', '+'];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateStats(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animateStats) return;
    const duration = 1200;
    const start = performance.now();
    const startValues = [0, 0, 0, 0];
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCounts(targets.map((target, i) => Math.round(startValues[i] + (target - startValues[i]) * eased)));
      if (t < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [animateStats]);

  return <section ref={sectionRef} onMouseMove={handleMouseMove} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <img src={heroBackground} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20" />
      </div>
      
      {/* Floating Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"
        style={{ transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 12}px, 0)` }}
      ></div>
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-300"
        style={{ transform: `translate3d(${parallax.x * -16}px, ${parallax.y * -10}px, 0)` }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-700"
        style={{ transform: `translate3d(${parallax.x * 10}px, ${parallax.y * -8}px, 0)` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 mt-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium my-0 mx-[2px]">Award-Winning Design Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We Design Digital
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Experiences
            </span>
            That Inspire
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into stunning digital realities. We craft user-focused designs that drive engagement, conversions, and lasting impressions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GradientButton onClick={scrollToContact} className="group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
            <Button onClick={scrollToPortfolio} variant="outline" className="btn-secondary text-white border-white/30 hover:bg-white hover:text-primary px-8 py-4 text-lg backdrop-blur-sm">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { label: 'Projects Completed' },
              { label: 'Client Satisfaction' },
              { label: 'Happy Clients' },
              { label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 transition-transform duration-300 will-change-transform">
                  {counts[index]}
                  {suffixes[index]}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-xs mt-2">Scroll</span>
        </div>
      </div>
    </section>;
};
export default Hero;