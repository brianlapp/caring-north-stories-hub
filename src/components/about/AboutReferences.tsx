
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen, FileText, Award, Building2, Globe } from 'lucide-react';

const AboutReferences = () => {
  const references = [
    {
      number: 1,
      text: "Compassionate Communities Australia. [Online] July, 2024.",
      url: "https://compassionatecommunities.au/",
      type: "Community Model",
      icon: Globe
    },
    {
      number: 2,
      text: "Sallnow, L., Smith, R., Ahmedzai, S. H., Bhadelia, A., Chamberlain, C., Cong, Y, Doble, B., Dullie, Durie, L.R., Finkelstein, E. A., Guglani, S., Hodson, M., Husebø, B.S., Kellehear, A., Kitzinger, C., Knaul, F.M., Murray, S.A., Neuberger, J., O'Mahony, S., Rajagopal, M.R., Russell, S., Sase, E., Sleeman, K.E., Solomon, S., Taylor, R., Tutu van Furth, M., Wyatt, K., on behalf of the Lancet Commission on the Value of Death. (2022). Report of the Lancet Commission on the Value of Death: bringing death back into life. Lancet, 26 February-4 March; 399(10327): 837–884.",
      type: "Academic Research",
      icon: BookOpen
    },
    {
      number: 3,
      text: "Kellehear A. (2022). The social nature of dying and the social model of health. In: Abel J, Kellehear A. (eds). Oxford Textbook of Public Health Palliative Care. Oxford: Oxford University Press.",
      type: "Academic Research",
      icon: BookOpen
    },
    {
      number: 4,
      text: "Ontario Provincial Framework for Palliative Care. [Online] July 2024",
      filename: "moh-ontario-provincial-framework-for-palliative-care-en-2021-12-07.pdf",
      type: "Government Policy",
      icon: Building2
    },
    {
      number: 5,
      text: "Municipality of North Grenville. (2023). Long-Term Population, Housing and Employment Study. [Online] August, 2024.",
      url: "https://www.northgrenville.ca/component/edocman/north-grenville-population-housing-employment-forecast-13-dec-23/viewdocument/472",
      type: "Local Data",
      icon: FileText
    },
    {
      number: 6,
      text: "Statistics Canada. Focus on Geography Series, 2021 Census of Population North Grenville, Municipality: Population and dwelling counts. [Online] July, 2024",
      url: "https://www12.statcan.gc.ca/census-recensement/2021/as-sa/fogs-spg/Page.cfm?lang=e&topic=1&dguid=2021A00053507065",
      type: "Government Data",
      icon: Building2
    },
    {
      number: 7,
      text: "Nelson and District Hospice Society, British Columbia. [Online] July 2024.",
      url: "https://nelsonhospice.org/",
      type: "Community Model",
      icon: Globe
    },
    {
      number: 8,
      text: "Tervalon M, Murray-Garcia J. (1998). Cultural humility versus cultural competence: A critical distinction in defining physician training outcomes in multicultural education. Journal of Health Care for the Poor and Underserved. 9(2):117–125.",
      url: "http://dx.doi.org/10.1353/hpu.2010.0233",
      type: "Academic Research",
      icon: BookOpen
    },
    {
      number: 9,
      text: "Julian Abel & Allan Kellehear's 2021, The Compassionate City: A Charter of Actions. [Online] August, 2024.",
      url: "https://static1.squarespace.com/static/57f61928d2b857de53f3b0a6/t/60041858c580bf115da024e3/1610881113850/CCCharter2021.pdf",
      type: "Best Practice Guide",
      icon: Award
    }
  ];

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "Academic Research":
        return "default";
      case "Government Policy":
      case "Government Data":
        return "secondary";
      case "Community Model":
        return "outline";
      case "Best Practice Guide":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card className="p-8 mb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
          🏛️ Evidence-Based Foundation
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
          Our compassionate community approach is built on a solid foundation of academic research, 
          government frameworks, and proven community models from around the world. These references 
          demonstrate the credible, evidence-based methodology behind Compassionate North Grenville.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="default" className="text-sm">Academic Research</Badge>
          <Badge variant="secondary" className="text-sm">Government Policy</Badge>
          <Badge variant="outline" className="text-sm">Community Models</Badge>
          <Badge variant="destructive" className="text-sm">Best Practice Guides</Badge>
        </div>
      </div>
      
      <div className="grid gap-6">
        {references.map((reference, index) => {
          const IconComponent = reference.icon;
          return (
            <div 
              key={index} 
              className="group flex items-start gap-6 p-6 rounded-xl bg-card/80 backdrop-blur-sm hover:bg-card hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-lg">{reference.number}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <Badge 
                    variant={getTypeVariant(reference.type)} 
                    className="text-xs font-medium shrink-0"
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {reference.type}
                  </Badge>
                </div>
                <p className="text-foreground leading-relaxed text-base mb-3 font-medium">
                  {reference.text}
                  {reference.filename && (
                    <span className="block mt-2 text-primary font-semibold">
                      📄 {reference.filename}
                    </span>
                  )}
                </p>
                {reference.url && (
                  <a 
                    href={reference.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/80 rounded-lg font-medium transition-all duration-200 group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    View Original Source
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4 italic">
          Adapted from Julian Abel & Allan Kellehear's 2021, The Compassionate City: A Charter of Actions
        </p>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <p className="text-base text-foreground font-medium">
            💡 <strong>These references validate our approach:</strong> Every aspect of Compassionate North Grenville 
            is grounded in proven research and successful community models, ensuring our initiative follows 
            established best practices for creating lasting, meaningful change.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AboutReferences;
