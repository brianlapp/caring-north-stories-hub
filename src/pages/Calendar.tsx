
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

const Calendar = () => {
  console.log('Calendar component mounted');
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/01ee1980-cca3-42d1-bd92-88d0e3631023.png)'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-2xl">
            Community Calendar
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Stay connected with all our upcoming events, gatherings, and community activities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Calendar Embed */}
        <Card className="p-8 mb-12">
          <div className="text-center mb-8">
            <CalendarIcon className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Compassionate North Grenville Events
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              View all our scheduled events, meetings, and gatherings. Click on any event for more details.
            </p>
          </div>

          {/* Google Calendar Embed */}
          <div className="w-full">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=compassionateng%40gmail.com&ctz=America%2FToronto"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              className="rounded-lg shadow-sm"
              title="Compassionate North Grenville Calendar"
              onError={(e) => {
                console.error('Calendar iframe failed to load:', e);
              }}
            ></iframe>
          </div>

          {/* Mobile-friendly link */}
          <div className="mt-6 text-center">
            <a
              href="https://calendar.google.com/calendar/u/4?cid=Y29tcGFzc2lvbmF0ZW5nQGdtYWlsLmNvbQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View in Google Calendar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Want to Add an Event?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you'd like to suggest an event or gathering for our community calendar, 
            please reach out to us.
          </p>
          <a
            href="mailto:compassionateng@gmail.com?subject=Calendar Event Suggestion"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Event Organizers
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
