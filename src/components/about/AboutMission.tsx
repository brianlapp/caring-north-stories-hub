
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutMission = () => {
  return (
    <Card className="p-8 mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
        Our Mission
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        Our mission is to foster a compassionate and inclusive community that embraces the full journey of life, illness, death, caring and bereavement. We are dedicated to helping normalize and destigmatize these universal experiences through sharing stories.
      </p>
    </Card>
  );
};

export default AboutMission;
