
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutVision = () => {
  return (
    <Card className="p-8 mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
        Our Vision
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        North Grenville is a compassionate community that nurtures and supports compassion and connection as we live, die, grieve, and care for each other.
      </p>
    </Card>
  );
};

export default AboutVision;
