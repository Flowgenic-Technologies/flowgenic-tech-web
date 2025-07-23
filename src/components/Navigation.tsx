import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/newlogo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    // { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">

              <img src={logo} alt=""
                height={100}
                width={60}
              />
              FlowGenic Technologies
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-smooth hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button className="btn-hero text-sm px-6 py-2">
          Contact Us
            </Button>
          </div> */}
          <div></div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-smooth hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              {/* <div className="pt-4 pb-2 space-y-2">
                <a href="/contact">
                  <Button className="w-full btn-hero">
                    Contact Us
                  </Button>
                </a>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;