import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Lightbulb, HandHeart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Compassionate North Grenville
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A grassroots community initiative fostering connection, storytelling, and compassion in North Grenville.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            [Mission statement to be extracted from CNG.docx.pdf document]
          </p>
        </Card>

        {/* Values */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Values
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed text-center">
            [Values to be extracted from CNG.docx.pdf document]
          </div>
        </Card>

        {/* Aspirations */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Aspirations
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed text-center">
            [Aspirations to be extracted from CNG.docx.pdf document]
          </div>
        </Card>

        {/* Community Images */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/efada589-a94e-49e5-ba4c-ee27a0a62840.png" 
                alt="Community members at the Kemptville Community Garden"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">Community Garden Gathering</h3>
                <p className="text-muted-foreground">
                  Our community comes together at local events like the Kemptville Community Garden, 
                  fostering connections through shared activities and mutual support.
                </p>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/2c96566b-ecb6-4be6-bff1-608a50cc3c90.png" 
                alt="Downtown Kemptville main street"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">Heart of North Grenville</h3>
                <p className="text-muted-foreground">
                  Our beautiful downtown Kemptville serves as the heart of our community, where 
                  neighbors meet, stories are shared, and compassion flourishes.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Land Acknowledgement */}
        <Card className="p-8 mb-16 bg-secondary/10 border-secondary/20">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4 text-center">
            Land Acknowledgement
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            We acknowledge that North Grenville is located on the traditional unceded territory 
            of the Algonquin Anishinaabe people. We are grateful for the opportunity to live, 
            work, and build community on this land, and we commit to honoring the Indigenous 
            peoples who have been its stewards for thousands of years.
          </p>
        </Card>

        {/* Community Grants Logo Placeholder */}
        <Card className="p-8 mb-16 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Community Support
          </h3>
          <div className="text-muted-foreground mb-4">
            [Community Grants Logo to be added here]
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Compassionate North Grenville is supported by community grants that enable us to 
            facilitate meaningful connections and storytelling opportunities.
          </p>
        </Card>

        {/* Call to Action */}
        <Card className="p-8 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're seeking connection, want to share your story, or simply wish to learn 
            about compassionate community building, we welcome you to connect with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/events">
                Learn About Our Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
