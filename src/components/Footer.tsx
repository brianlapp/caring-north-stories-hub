
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-heading font-semibold">Compassionate North Grenville</h3>
            </div>
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
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors story-link">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a href="mailto:compassionateng@gmail.com" className="hover:text-primary transition-colors story-link">
                  compassionateng@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                North Grenville, Ontario
              </p>
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
