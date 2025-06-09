import { useState, useEffect, useRef } from 'react';

const Link = ({ section, currentSection, onClick }) => {
  return (
    <a
      href={`#${section}`}
      className={`header-link font-sans transition ${
        currentSection === section
          ? 'font-[700] text-[var(--color-poppy)]' // Bold for the clicked section. It's poppy color rn because it doesn't work
          : 'font-[400] text-[var(--color-poppy)] hover:font-[700]' // Same here, not working.
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick(section); // Set the clicked section as currentSection
      }}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
  );
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home'); // Default to 'home' as the initial section
  const headerRef = useRef(null); // Ref to get header height

  const sections = ['home', 'about', 'newsfeed', 'sponsors', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // --- Background Effect ---
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      let detectedSection = '';
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const scrollThreshold = window.scrollY + headerHeight + 50; // section activation

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;

          if (scrollThreshold >= elementTop) {
            detectedSection = sectionId; // Track which section is visible
          }
        }
      }

      if (window.scrollY < 100 && sections.length > 0) {
        detectedSection = sections[0]; // Default to first section when scroll is at the top
      }

      // Update state if currentSection has changed
      if (detectedSection !== currentSection) {
        setCurrentSection(detectedSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger scroll logic once on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [currentSection]);

  const handleClick = (section) => {
    setCurrentSection(section); // Set clicked section as the active one

    const element = document.getElementById(section);
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 10; // Account for fixed header height

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[75%] z-50 rounded-2xl transition-all duration-450 ease-in-out backdrop-blur-lg ${
        scrolled
          ? 'py-4 px-8 top-6'
          : 'py-4 px-8 top-0'
      } bg-gradient-to-r from-[var(--color-navy-blue)]/60 to-[var(--color-poppy)]/60`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
        <div className="flex items-center justify-center w-full lg:w-auto">
          <div className="flex items-center space-x-3 justify-center w-full lg:justify-start">
            <h1 className="text-xl font-display select-none font-bold header-scale">TEAM 3588</h1>
            <div className="w-10 h-10 bg-white/0 rounded-sm mr-3 flex items-center justify-center">
              <img src="./images/mainlogo.svg" alt="Team 3588 Logo" className="h-full w-auto" />
            </div>
            <h1 className="text-xl font-mono select-none header-scale">THE TALON</h1>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              section={section}
              currentSection={currentSection} // Pass currentSection here to apply bold styling
              onClick={handleClick} // Pass handleClick for da onClick event
            />
          ))}
        </nav>
      </div>
    </header>
  );
}