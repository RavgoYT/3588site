import React from 'react';

/**
 * Hero section with robot image and parallax effect
 * @param {Object} props
 * @param {number} props.scrollY - Current scroll position for parallax effect
 */
const HeroSection = ({ scrollY }) => {
  // Define a scroll threshold where the effect stops
  const threshold = window.innerHeight * 0.15; // 10% of viewport height

  // Apply a maximum translation and opacity reduction
  const translateY = scrollY * 0.2 > threshold ? threshold : scrollY * 0.2;
  const opacity = 1 - (scrollY * 0.001 > 0.5 ? 0.5 : scrollY * 0.001); // Prevent opacity from going below 0.5

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* No gradient background */}
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${translateY}px)`, // Apply the calculated translation
          opacity: opacity, // Apply the calculated opacity
        }}
      >
        <div className="text-center">
          <div className="mb-0 pt-16 md:pt-32 lg:pt-62 xl:pt-75">
            {/* Robot image without parallax effect */}
            <div className="w-screen mx-auto bg-black flex items-center justify-center overflow-hidden">
              <img
                src="./images/robot.png"
                alt="Team 3588 Robot"
                className="w-screen h-full object-cover"
              />
              {/* READY FOR TAKEOFF */}
              <div className="absolute left-1/2 top-[79%] -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="takeoff-text">
                  READY FOR TAKEOFF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
