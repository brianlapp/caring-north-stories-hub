
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, User, ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample featured stories and events
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
      excerpt: "Local hospice volunteers share what they've learned about the gift of simply being there for someone...",
      author: "Volunteer Team",
      date: "2024-06-01"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Let's Talk Compassion - Monthly Circle",
      date: "2024-06-20",
      location: "Community Center"
    },
    {
      id: 2,
      title: "Storytelling Circle: Finding Our Stories",
      date: "2024-06-27",
      location: "Library Meeting Room"
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
              Recent Stories
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

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Join Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your community at our upcoming gatherings and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-6 hover-scale transition-all duration-300 hover:shadow-lg bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {event.location}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/events">
                View All Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Be Part of Something Meaningful
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Whether you're seeking support, want to share your story, or simply wish to 
            connect with others who understand life's challenges, you have a place in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/contact">Share Your Story</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
