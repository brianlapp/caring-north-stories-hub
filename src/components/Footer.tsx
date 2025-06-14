
import React from 'react';
import { Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <img 
              src="/lovable-uploads/7bcc77c2-4881-45b3-9f91-7e5807209ceb.png" 
              alt="Compassionate North Grenville" 
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground leading-relaxed">
              A grassroots initiative fostering care, connection, and community—particularly 
              during caregiving, illness, dying, and grief.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  About Our Mission
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Community Stories
                </a>
              </li>
              <li>
                <a href="/events" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/calendar" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Event Calendar
                </a>
              </li>
              <li>
                <a href="/about#references" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  References
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <a href="mailto:compassionateng@gmail.com" className="hover:text-primary transition-colors story-link">
                  compassionateng@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                North Grenville, Ontario
              </p>
              <div className="pt-2">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg">
                  <a 
                    href="https://www.facebook.com/compassionatenorthgrenville/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Follow us on Facebook</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Compassionate North Grenville. Built with care for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
