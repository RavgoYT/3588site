import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SectionDivider from './components/ui/SectionDivider';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import NewsfeedSection from './components/sections/NewsfeedSection.jsx';
import SponsorshipSection from './components/sections/SponsorshipSection';
import MentorshipSection from './components/sections/MentorshipSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-'TT Norms Pro'">
      {/* Header */}
      <Header />

      {/* Main content container */}
      <main className="pt-16 w-screen overflow-hidden"> {/* Add padding top to account for fixed header */}
        {/* Hero Section */}
        <HeroSection scrollY={scrollY} />

        {/* About Section */}
        <AboutSection />

        {/* Section Divider */}
        <SectionDivider title="NEWSFEED" />

        {/* Newsfeed Section */}
        <NewsfeedSection />

        {/* Section Divider */}
        <SectionDivider title="SPONSORSHIP INFO" />

        {/* Sponsorship Section */}
        <SponsorshipSection />

        {/* Section Divider */}
        <SectionDivider title="MENTORSHIP INFO" />

        {/* Mentorship Section */}
        <MentorshipSection />

        {/* Section Divider */}
        <SectionDivider title="CONTACT US !!!" />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}