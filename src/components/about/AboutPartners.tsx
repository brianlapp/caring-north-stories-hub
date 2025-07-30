import React from 'react';
import { Card } from '@/components/ui/card';
import { Building, Heart } from 'lucide-react';

const AboutPartners = () => {
  const partners = [
    {
      name: "Municipality of North Grenville",
      description: "Working together to promote compassionate community programs, services, public events, education and funding opportunities that address the mission of Compassionate North Grenville.",
      icon: Building
    },
    {
      name: "Hospice Care Ottawa",
      description: "Partnering to provide compassionate end-of-life care and support services for individuals and families in our community.",
      icon: Heart
    }
  ];

  return (
    <Card className="p-8 mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
        Our Partners
      </h2>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        We collaborate with key organizations to strengthen compassionate care in North Grenville.
      </p>
      <div className="grid gap-6">
        {partners.map((partner, index) => {
          const IconComponent = partner.icon;
          return (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-secondary/10 hover:bg-secondary/15 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AboutPartners;