
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutVision from '@/components/about/AboutVision';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutCharter from '@/components/about/AboutCharter';
import AboutPartners from '@/components/about/AboutPartners';
import AboutFriends from '@/components/about/AboutFriends';
import AboutReferences from '@/components/about/AboutReferences';
import AboutCommunity from '@/components/about/AboutCommunity';
import AboutLandAcknowledgement from '@/components/about/AboutLandAcknowledgement';
import AboutSupport from '@/components/about/AboutSupport';
import AboutContact from '@/components/about/AboutContact';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AboutVision />
        <AboutMission />
        <AboutValues />
        <AboutCharter />
        <AboutPartners />
        <AboutFriends />
        <AboutReferences />
        <AboutCommunity />
        <AboutLandAcknowledgement />
        <AboutSupport />
        <AboutContact />
      </div>
    </div>
  );
};

export default About;
