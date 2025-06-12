
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const AboutContact = () => {
  return (
    <>
      {/* Contact Information */}
      <Card className="p-8 mb-16 bg-primary/5 border-primary/20 text-center">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Contact Us
        </h3>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Mail className="w-5 h-5 text-primary" />
          <a 
            href="mailto:compassionateng@gmail.com" 
            className="text-primary hover:text-primary/80 text-lg font-medium"
          >
            compassionateng@gmail.com
          </a>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          For further information about Compassionate North Grenville, please reach out to us via email.
        </p>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 bg-primary/5 border-primary/20 text-center">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Join Our Community
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Whether you're seeking connection, want to share your story, or simply wish to learn 
          about compassionate community building, we welcome you to connect with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <a href="/events">
              Learn About Our Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default AboutContact;
