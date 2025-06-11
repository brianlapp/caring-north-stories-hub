
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Lightbulb, HandHeart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of kindness and understanding to heal and strengthen our community."
    },
    {
      icon: Users,
      title: "Connection",
      description: "Building meaningful relationships and support networks that last through life's challenges."
    },
    {
      icon: Lightbulb,
      title: "Wisdom",
      description: "Learning from shared experiences and the collective knowledge of our community members."
    },
    {
      icon: HandHeart,
      title: "Care",
      description: "Providing practical and emotional support during times of need, illness, and grief."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Compassionate North Grenville
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A grassroots initiative fostering care, connection, and community in North Grenville.
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
            To build a more compassionate community in North Grenville by fostering connections, 
            sharing stories, and supporting one another—particularly during times of caregiving, 
            illness, dying, and grief. We believe that through understanding and care, we can 
            create a stronger, more resilient community for all.
          </p>
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

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <Card className="p-8 mb-16 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            What We Do
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Monthly "Let's Talk Compassion" Circles
              </h3>
              <p>
                Regular gatherings where community members come together to share experiences, 
                discuss challenges, and support one another in building a more compassionate community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Storytelling and Connection
              </h3>
              <p>
                We facilitate opportunities for people to share their stories of caregiving, loss, 
                resilience, and hope, creating deeper understanding and connection within our community.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Community Support Networks
              </h3>
              <p>
                Building networks of care and support, particularly for those experiencing illness, 
                providing care to loved ones, or navigating grief and loss.
              </p>
            </div>
          </div>
        </Card>

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

        {/* Call to Action */}
        <Card className="p-8 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Join Our Community
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're seeking support, want to volunteer, or simply wish to connect with 
            like-minded neighbors, we welcome you to be part of our compassionate community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="/events">
                Join Our Events
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
