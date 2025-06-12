
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutCommunity = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
        Our Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <img 
            src="/lovable-uploads/efada589-a94e-49e5-ba4c-ee27a0a62840.png" 
            alt="Community members at the Kemptville Community Garden"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-heading font-semibold mb-2">Community Garden Gathering</h3>
            <p className="text-muted-foreground">
              Our community comes together at local events like the Kemptville Community Garden, 
              fostering connections through shared activities and mutual support.
            </p>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <img 
            src="/lovable-uploads/2c96566b-ecb6-4be6-bff1-608a50cc3c90.png" 
            alt="Downtown Kemptville main street"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-heading font-semibold mb-2">Heart of North Grenville</h3>
            <p className="text-muted-foreground">
              Our beautiful downtown Kemptville serves as the heart of our community, where 
              neighbors meet, stories are shared, and compassion flourishes.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutCommunity;
