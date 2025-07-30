
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, BookOpen, Heart, Lightbulb } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Collaborative Inquiry with Youngsters of Yore",
      date: "2025-05-22",
      location: "North Grenville Public Library",
      description: "An introduction to Compassionate North Grenville followed by a lively inquiry about the experiences of compassion in the past and present in North Grenville.",
      type: "Collaborative Inquiry",
      attendees: "30 attendees",
      icon: Heart,
      highlights: ["Authentic stories", "Historical community experiences", "Positive vibe"]
    },
    {
      id: 2,
      title: "Inaugural Compassionate Care Award",
      date: "2025-05-13",
      location: "Catered Affairs/North Grenville Municipality",
      description: "Brenda Ward received the municipality's inaugural Compassionate Care Award. The award is granted for 'Volunteer efforts, individual or group, demonstrating creativity in compassionate care, recognizing imagination, originality, innovation or artistic expressions of care.' Brenda is known as The Poppy Lady because she initiated and coordinates the annual Poppy Remembrance Day Art Installation at the Clock Tower in downtown Kemptville.",
      type: "Public Event",
      attendees: "Public event",
      icon: BookOpen,
      highlights: ["Inspiring leadership", "Arts in action", "Volunteerism"]
    },
    {
      id: 3,
      title: "Community Update and \"Let's Talk\"",
      date: "2025-05-06",
      location: "Kemptville Christian Reformed Church",
      description: "An open meeting for everyone interested in learning about Compassionate North Grenville. Participants shared stories of compassion in North Grenville and beyond.",
      type: "Community Meeting",
      attendees: "10 participants",
      icon: Users,
      highlights: ["Mission introduction", "Sharing stories", "Compassion"]
    },
    {
      id: 4,
      title: "Advance Care Planning Event",
      date: "2025-04-16",
      location: "North Grenville Public Library",
      description: "An educational opportunity featuring an introduction to Compassionate North Grenville and an engaging presentation by author/speaker Marc Seguin on the importance of planning for future care decisions.",
      type: "Educational Event",
      attendees: "35 attendees",
      icon: Lightbulb,
      highlights: ["Authentic presentations", "ACP resources distributed", "Identified local resources"]
    }
  ];

  const handleContactUs = () => {
    const subject = encodeURIComponent('Interest in Community Events');
    const body = encodeURIComponent(`Hello,\n\nI'm interested in learning more about Compassionate North Grenville's community events and how I can get involved.\n\nPlease let me know about upcoming opportunities or how I can contribute to the community.\n\nThank you!`);
    window.location.href = `mailto:compassionateng@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/133579d3-8006-44ad-8a67-540588d8ba2a.png)'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Hero Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-2xl leading-tight">
              Community Events
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed animate-fade-in max-w-4xl mx-auto drop-shadow-lg font-medium">
              Meaningful gatherings where we share stories, support one another, 
              and build lasting connections in our community.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How We Organize Events */}
        <Card className="p-8 mb-16 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            How We Organize Events
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-4">
            Compassionate North Grenville organizes events as needed to serve our community's interests and needs. 
            Rather than following a rigid schedule, we respond to opportunities for meaningful connection and learning.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            If you have ideas for community gatherings, storytelling circles, or educational workshops, 
            we'd love to hear from you and explore how we can facilitate these connections.
          </p>
        </Card>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Recent Community Gatherings
          </h2>
          <div className="space-y-8">
            {pastEvents.map((event) => {
              const IconComponent = event.icon;
              return (
                <Card key={event.id} className="p-8 hover-scale transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <span className="inline-block bg-secondary/20 text-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {event.type}
                        </span>
                        <h3 className="text-2xl font-heading font-bold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {event.highlights && (
                      <div className="bg-secondary/10 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3">Event Highlights:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {event.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                              <span className="text-muted-foreground text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Event Approach */}
        <Card className="p-8 mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Our Approach to Community Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10">
                <div className="flex-shrink-0 mt-1">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Welcoming & Inclusive</h4>
                  <p className="text-muted-foreground">All events are designed to be accessible and welcoming to community members of all backgrounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10">
                <div className="flex-shrink-0 mt-1">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community-Driven</h4>
                  <p className="text-muted-foreground">Events emerge from community interests and needs rather than predetermined schedules.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Story-Centered</h4>
                  <p className="text-muted-foreground">We emphasize sharing experiences and learning from one another's journeys.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10">
                <div className="flex-shrink-0 mt-1">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Pressure Environment</h4>
                  <p className="text-muted-foreground">Participation is voluntary - your presence and listening are valuable contributions.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Get Involved */}
        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Interested in Future Gatherings?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you'd like to be notified about future community events, have ideas for gatherings, 
            or want to help facilitate meaningful connections in North Grenville, we'd love to hear from you.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" onClick={handleContactUs}>
            Connect With Us
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Events;
