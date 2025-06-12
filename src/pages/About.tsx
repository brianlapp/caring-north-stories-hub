
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Heart, Users, Lightbulb, Shield, Eye, Handshake, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      text: "Compassion is inclusive and diverse"
    },
    {
      icon: Users,
      text: "How we do things is as important as what we do"
    },
    {
      icon: Handshake,
      text: "We work in partnership to build communities and networks"
    },
    {
      icon: Shield,
      text: "We respect the individual and their choices"
    },
    {
      icon: Lightbulb,
      text: "We approach our work with openness and curiosity"
    },
    {
      icon: Eye,
      text: "Cultural humility guides our conversations, engagement, and decision-making. Cultural humility is a process of self-reflection and discovery to understand oneself and then others in order to build honest and trustworthy relationships."
    }
  ];

  const charterItems = [
    {
      title: "Compassionate Policies",
      description: "Policies and guidelines that are reflective of compassionate community values regarding caregiving, dying, and grieving are in place in our:",
      subItems: ["Schools", "Workplaces/Unions", "Residential facilities (long-term care homes, retirement homes, shelters, prisons)"]
    },
    {
      title: "Faith Community Support",
      description: "Supporting faith communities that have designated individuals or care teams for the care of caregivers, dying, and grieving people"
    },
    {
      title: "Arts & Cultural Events",
      description: "Arts centres/galleries/historical societies organize annual exhibits, murals, or events featuring living well, dying well, caregiving and grieving"
    },
    {
      title: "Memorial Recognition",
      description: "An annual memorial event to mark the loss of those who have died due to illness or accidents"
    },
    {
      title: "Creative Competitions",
      description: "A short-story or art competition that helps raise awareness of living well, dying well, caregiving, and grieving"
    },
    {
      title: "Community Awards",
      description: "An annual award, given by the Mayor and Council to an individual or group in North Grenville which demonstrates creativity in compassionate care and is consistent with the mission of Compassionate North Grenville"
    },
    {
      title: "Municipal Partnership",
      description: "A collaborative relationship with our Municipality, working together to promote compassionate community programs, services, public events, education and funding opportunities that address the mission of Compassionate North Grenville"
    },
    {
      title: "Community Engagement",
      description: "Supporting communities that engage in activities for those who experience caregiving, dying, and grieving"
    },
    {
      title: "Continuous Growth",
      description: "Annual reviews of these aspirations with the intention of expanding the scope of compassion throughout North Grenville. This is a living document which will be revised as needed."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
        <div className="relative min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/7c477996-834c-4910-a2e8-fd51d72c6947.png)'
            }}
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Hero Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-2xl leading-tight">
              About Compassionate North Grenville
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed animate-fade-in max-w-4xl mx-auto drop-shadow-lg font-medium">
              A grassroots community initiative fostering connection, storytelling, and compassion in North Grenville.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            North Grenville is a compassionate community that nurtures and supports compassion and connection as we live, die, grieve, and care for each other.
          </p>
        </Card>

        {/* Mission */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Our mission is to foster a compassionate and inclusive community that embraces the full journey of life, illness, death, caring and bereavement. We are dedicated to helping normalize and destigmatize these universal experiences through sharing stories.
          </p>
        </Card>

        {/* Values */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/15 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Charter Aspirations */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 text-center">
            Charter for Compassionate North Grenville
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center font-medium">We aspire towards:</p>
          <div className="grid gap-6">
            {charterItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    {item.title && (
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                    )}
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.subItems && (
                      <div className="ml-4">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{subItem}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            Compassionate Community North Grenville operates on the territory of the Anishnabek. We recognize all First Nations, Metis, and Inuit peoples who now call North Grenville their home. We respect and support the need for cultivating a strong relationship, and we commit to Indigenous-informed decision making to foster the path towards reconciliation.
          </p>
        </Card>

        {/* Community Grants Logo */}
        <Card className="p-8 mb-16 bg-accent/5 border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Community Support
          </h3>
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/dae3d4c0-cfb7-4f53-9a32-8ffcaa9e59f2.png" 
              alt="North Grenville Community Grant Program"
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Compassionate North Grenville is supported by the North Grenville Community Grant Program, 
            which enables us to facilitate meaningful connections and storytelling opportunities.
          </p>
        </Card>

        {/* Contact Information */}
        <Card className="p-8 mb-16 bg-primary/5 border-primary/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <a 
              href="mailto:compassionateng@gmail.com" 
              className="text-primary hover:text-primary/80 text-lg font-medium"
            >
              compassionateng@gmail.com
            </a>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            For further information about Compassionate North Grenville, please reach out to us via email.
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
