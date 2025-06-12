
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSupport = () => {
  return (
    <Card className="p-8 mb-16 bg-accent/5 border-accent/20 text-center">
      <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
        Community Support
      </h3>
      <div className="flex justify-center mb-4">
        <img 
          src="/lovable-uploads/dae3d4c0-cfb7-4f53-9a32-8ffcaa9e59f2.png" 
          alt="North Grenville Community Grant Program"
          className="h-24 w-auto object-contain"
        />
      </div>
      <p className="text-muted-foreground leading-relaxed">
        Compassionate North Grenville is supported by the North Grenville Community Grant Program, 
        which enables us to facilitate meaningful connections and storytelling opportunities.
      </p>
    </Card>
  );
};

export default AboutSupport;
