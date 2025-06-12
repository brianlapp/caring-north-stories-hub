
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutCharter = () => {
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
  );
};

export default AboutCharter;
