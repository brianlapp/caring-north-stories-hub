
import React from 'react';

const AboutHero = () => {
  return (
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
        <div className="absolute inset-0 bg-black/60" />
        
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
  );
};

export default AboutHero;
