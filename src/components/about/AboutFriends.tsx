import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Clock } from 'lucide-react';

const AboutFriends = () => {
  return (
    <Card className="p-8 mb-16">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
        Friends of CNG
      </h2>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-lg text-muted-foreground mb-4">
          Coming Soon
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We're currently developing our Friends of CNG program and partner agreements. 
          This section will feature community organizations and individuals who support our mission 
          of fostering compassion in North Grenville.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>Being finalized by Cristina and the CNG team</span>
        </div>
      </div>
    </Card>
  );
};

export default AboutFriends;