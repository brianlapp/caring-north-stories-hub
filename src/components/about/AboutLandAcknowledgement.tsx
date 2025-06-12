
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutLandAcknowledgement = () => {
  return (
    <Card className="p-8 mb-16 bg-secondary/10 border-secondary/20">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-4 text-center">
        Land Acknowledgement
      </h2>
      <p className="text-muted-foreground leading-relaxed text-center">
        Compassionate Community North Grenville operates on the territory of the Anishnabek. We recognize all First Nations, Metis, and Inuit peoples who now call North Grenville their home. We respect and support the need for cultivating a strong relationship, and we commit to Indigenous-informed decision making to foster the path towards reconciliation.
      </p>
    </Card>
  );
};

export default AboutLandAcknowledgement;
