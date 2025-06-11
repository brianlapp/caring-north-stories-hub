
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, Book } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Building Community Through{' '}
            <span className="text-primary">Compassion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            A grassroots initiative fostering care, connection, and community in North Grenville—
            particularly during caregiving, illness, dying, and grief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/blog">Read Our Stories</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/events">Join an Event</a>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          <Card className="p-8 text-center hover-scale bg-card border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Share Stories</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover and share stories of compassion, caregiving, and community connection 
              that inspire and unite us.
            </p>
          </Card>

          <Card className="p-8 text-center hover-scale bg-card border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Join Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Participate in "Let's Talk Compassion" gatherings, storytelling circles, 
              and community forums.
            </p>
          </Card>

          <Card className="p-8 text-center hover-scale bg-card border-border">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Build Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect with neighbors, support each other through difficult times, 
              and strengthen our community bonds.
            </p>
          </Card>
        </div>
      </div>

      {/* Gentle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
