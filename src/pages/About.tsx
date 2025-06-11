
import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Compass, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a compassionate community where everyone feels supported through 
            life's most challenging and meaningful moments.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <Card className="p-8 mb-16 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            Compassionate North Grenville is a grassroots initiative dedicated to fostering 
            care, connection, and community—particularly during times of caregiving, illness, 
            dying, and grief. We believe that through sharing our stories and supporting one 
            another, we can create a more compassionate community for all.
          </p>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Compassion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We approach every interaction with empathy, understanding, and genuine care 
                for the human experience.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of connection and the strength that comes from 
                supporting one another through shared experiences.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide gentle guidance and resources to help community members navigate 
                difficult times with dignity and support.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We recognize that through our most challenging experiences, we often find 
                unexpected wisdom, resilience, and deeper connections.
              </p>
            </Card>
          </div>
        </div>

        {/* Land Acknowledgement */}
        <Card className="p-8 mb-16 bg-secondary/10 border-secondary/20">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Land Acknowledgement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We acknowledge that North Grenville is located on the traditional unceded territory 
            of the Algonquin Anishinaabe people. We recognize their continued connection to this 
            land and honor their enduring relationship with the territory. We are grateful for 
            the opportunity to gather, learn, and build community on this land, and we commit 
            to supporting Indigenous sovereignty and self-determination.
          </p>
        </Card>

        {/* Compassionate Communities Philosophy */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            The Compassionate Communities Approach
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our work is grounded in the Compassionate Communities philosophy, which recognizes 
              that caring for one another—especially during times of illness, dying, and grief—is 
              not just the responsibility of healthcare professionals, but of entire communities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This approach emphasizes the importance of social connections, community engagement, 
              and the wisdom that comes from shared experiences. By fostering these connections, 
              we can create a network of support that helps everyone navigate life's most 
              challenging moments with greater resilience and less isolation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through storytelling, gatherings, and ongoing dialogue, we aim to normalize 
              conversations about mortality, grief, and caregiving while celebrating the 
              profound meaning and growth that can emerge from these experiences.
            </p>
          </div>
        </div>

        {/* Get Involved */}
        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're currently navigating a difficult time, have wisdom to share from 
            your own experiences, or simply want to contribute to building a more compassionate 
            community, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events" 
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-lg font-medium transition-colors"
            >
              Attend an Event
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-accent/10 px-6 py-3 text-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
