
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Let's Talk Compassion - Monthly Circle",
      date: "2024-06-20",
      time: "7:00 PM - 8:30 PM",
      location: "Community Center, North Grenville",
      description: "Join us for our monthly gathering where community members share stories, discuss challenges, and support one another in building a more compassionate community.",
      type: "Monthly Gathering",
      attendees: "15-20 expected"
    },
    {
      id: 2,
      title: "Storytelling Circle: Finding Our Stories",
      date: "2024-06-27",
      time: "2:00 PM - 4:00 PM",
      location: "Library Meeting Room",
      description: "An intimate gathering focused on sharing personal stories of resilience, caregiving, and community connection. All community members welcome.",
      type: "Storytelling",
      attendees: "8-12 expected"
    },
    {
      id: 3,
      title: "Youngsters of Yore: Elder Wisdom Session",
      date: "2024-07-05",
      time: "10:00 AM - 11:30 AM",
      location: "Senior Center",
      description: "A special session where our community elders share memories, wisdom, and stories from their experiences of community care and connection.",
      type: "Elder Wisdom",
      attendees: "20-25 expected"
    },
    {
      id: 4,
      title: "Grief Support and Community Healing",
      date: "2024-07-12",
      time: "6:30 PM - 8:00 PM",
      location: "Faith Community Center",
      description: "A gentle space for those navigating loss to connect with others who understand the journey. No pressure to share, just presence and support.",
      type: "Support Circle",
      attendees: "10-15 expected"
    }
  ];

  const handleRSVP = (eventTitle: string) => {
    const subject = encodeURIComponent(`RSVP for ${eventTitle}`);
    const body = encodeURIComponent(`I would like to RSVP for the event: ${eventTitle}\n\nPlease let me know if you need any additional information.\n\nThank you!`);
    window.location.href = `mailto:compassionateng@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Community Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for meaningful gatherings where we share stories, support one another, 
            and build lasting connections in our community.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-8 hover-scale transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long',
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <Button 
                      size="lg" 
                      className="w-full lg:w-auto text-lg px-8 py-4"
                      onClick={() => handleRSVP(event.title)}
                    >
                      RSVP Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Guidelines */}
        <Card className="p-8 bg-secondary/10 border-secondary/20 mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
            What to Expect at Our Events
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Welcoming Environment</h4>
              <p>All our events are designed to be inclusive, accessible, and welcoming to community members of all backgrounds and experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">No Pressure to Share</h4>
              <p>While we encourage storytelling and discussion, there's never any pressure to share personal experiences. Your presence and listening are valuable contributions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Confidentiality</h4>
              <p>What's shared in our circles stays in our circles. We maintain a respectful environment where people feel safe to be vulnerable.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
              <p>We strive to make all events accessible. Please contact us if you have specific needs or questions about venue accessibility.</p>
            </div>
          </div>
        </Card>

        {/* Contact for Events */}
        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Questions About Our Events?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you have questions about any of our events, need more information, or would 
            like to suggest ideas for future gatherings, we'd love to hear from you.
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
            <a href="mailto:compassionateng@gmail.com">
              Contact Event Organizers
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Events;
