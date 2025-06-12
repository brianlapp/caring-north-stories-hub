
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Lightbulb, Shield, Eye, Handshake } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: Heart,
      text: "Compassion is inclusive and diverse"
    },
    {
      icon: Users,
      text: "How we do things is as important as what we do"
    },
    {
      icon: Handshake,
      text: "We work in partnership to build communities and networks"
    },
    {
      icon: Shield,
      text: "We respect the individual and their choices"
    },
    {
      icon: Lightbulb,
      text: "We approach our work with openness and curiosity"
    },
    {
      icon: Eye,
      text: "Cultural humility guides our conversations, engagement, and decision-making. Cultural humility is a process of self-reflection and discovery to understand oneself and then others in order to build honest and trustworthy relationships."
    }
  ];

  return (
    <Card className="p-8 mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
        Our Values
      </h2>
      <div className="grid gap-6">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/15 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {value.text}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AboutValues;
