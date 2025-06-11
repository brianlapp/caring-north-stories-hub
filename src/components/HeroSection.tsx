
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, Book } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Content with Background Image */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/b5c8c5e4-ee0b-4e66-8d45-f3a7e3e4f7a1.png)'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Building Community Through{' '}
            <span className="text-primary-foreground drop-shadow-lg">Compassion</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/95 mb-8 leading-relaxed animate-fade-in max-w-4xl mx-auto drop-shadow-lg">
            A grassroots initiative fostering care, connection, and community in North Grenville—
            particularly during caregiving, illness, dying, and grief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Button size="lg" className="text-xl px-10 py-6 shadow-2xl hover:shadow-xl transition-all" asChild>
              <a href="/blog">Read Our Stories</a>
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-6 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 shadow-2xl hover:shadow-xl transition-all" asChild>
              <a href="/events">Join an Event</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
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
      </div>
    </div>
  );
};

export default HeroSection;
