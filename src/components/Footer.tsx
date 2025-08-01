import { Mail, Phone, MapPin, LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Automation Solutions',
      'Custom Development',
      'Digital Marketing',
      'AI generated Ads',
    ],
    company: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      'Documentation',
      'API Reference',
      'Support Center',
      'Contact',
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="font-heading font-bold text-2xl mb-4">FlowGenic</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Transforming businesses through intelligent automation and custom software development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:info.flowgenic@gmail.com" className="flex items-center space-x-3 hover:underline">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-sm">info.flowgenic@gmail.com</span>
                </a>
                <a href="tel:+9779819185638" className="flex items-center space-x-3 hover:underline">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm">+977 9819185638</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Lalitpur, Nepal</span>
                </div>
              </div>

            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Get the latest insights on automation and technology trends.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} FlowGenic Technologies. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578811012353" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/flowgenictechnologies__/" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;