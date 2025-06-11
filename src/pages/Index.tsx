
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User, ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample featured stories
  const featuredStories = [
    {
      id: 1,
      title: "Finding Grace in Caregiving",
      excerpt: "Sarah's journey caring for her mother with dementia revealed unexpected moments of joy and community support...",
      author: "Community Contributor",
      date: "2024-06-08"
    },
    {
      id: 2,
      title: "The Power of Presence",
      excerpt: "Community members share what they've learned about the gift of simply being there for someone during difficult times...",
      author: "Community Contributor",
      date: "2024-06-01"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Stories */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Community Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover inspiring stories of compassion and connection from our community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredStories.map((story) => (
              <Card key={story.id} className="p-6 hover-scale transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(story.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{story.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 story-link">
                  <a href={`/blog/${story.id}`}>{story.title}</a>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {story.excerpt}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <a href="/blog">
                Read All Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Community Connections
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We facilitate meaningful gatherings and conversations as opportunities arise in our community.
            </p>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20 text-center mb-12">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Past Community Gatherings
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our recent events have included advance care planning workshops, storytelling circles, 
              and intergenerational conversations that have brought our community together around 
              shared experiences of care and compassion.
            </p>
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/events">
                Learn About Our Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Be Part of Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you want to share your story, connect with others who understand life's challenges, 
            or learn about compassionate community building, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/contact">Connect With Us</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <a href="/about">Learn About Our Mission</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
