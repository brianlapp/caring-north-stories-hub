
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Content with Background Image */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/ea55427a-374d-46df-8e09-f4e384822ddd.png)'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 animate-fade-in drop-shadow-2xl leading-tight">
            Building Community Through{' '}
            <span className="text-primary-foreground drop-shadow-lg block mt-4">Compassion</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-white/95 mb-12 leading-relaxed animate-fade-in max-w-5xl mx-auto drop-shadow-lg font-medium">
            A grassroots initiative fostering care, connection, and community in North Grenville—
            particularly during caregiving, illness, dying, and grief.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-in">
            <Button size="lg" className="text-2xl px-12 py-8 shadow-2xl hover:shadow-xl transition-all font-semibold" asChild>
              <Link to="/blog">Read Our Blog</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-2xl px-12 py-8 bg-white/15 backdrop-blur border-white/40 text-white hover:bg-white/25 shadow-2xl hover:shadow-xl transition-all font-semibold" asChild>
              <Link to="/events">Join an Event</Link>
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
              <h3 className="text-xl font-heading font-semibold mb-4">Read Our Blog</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover weekly stories of compassion, caregiving, and community connection 
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
