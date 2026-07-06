import { useState } from 'react';
import { Home, User, Briefcase, FolderOpen, MessageSquare, Phone } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { GradientButton } from '@/components/ui/gradient-button';

const AppSidebar = () => {
  const { state, setOpenMobile } = useSidebar();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Portfolio', href: '#portfolio', icon: FolderOpen },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const scrollToSection = (href: string, name: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(name.toLowerCase());
      // Close mobile sheet after navigation
      setOpenMobile(false);
    }
  };

  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold text-foreground">PixelCraft</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? 'sr-only' : ''}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      className={`
                        transition-all duration-200 cursor-pointer
                        ${isActive 
                          ? 'bg-primary/10 text-primary border-r-2 border-primary' 
                          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                        }
                      `}
                    >
                      <button
                        onClick={() => scrollToSection(item.href, item.name)}
                        className="flex items-center w-full"
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && (
                          <span className="ml-3 font-medium">{item.name}</span>
                        )}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* CTA Section */}
        {!isCollapsed && (
          <div className="mt-auto p-4">
            <div className="bg-gradient-primary rounded-xl p-4 text-center">
              <h4 className="text-white font-semibold text-sm mb-2">
                Ready to Start?
              </h4>
              <p className="text-white/80 text-xs mb-3">
                Let's discuss your project
              </p>
              <GradientButton
                onClick={() => scrollToSection('#contact', 'contact')}
                className="w-full text-sm font-medium py-2 px-3"
              >
                Get Started
              </GradientButton>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;