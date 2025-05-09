import React from 'react';

/**
 * Hero section with robot image and parallax effect
 * @param {Object} props
 * @param {number} props.scrollY - Current scroll position for parallax effect
 */
const HeroSection = ({ scrollY }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black z-0"></div>
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 1 - scrollY * 0.001
        }}
      >
        <div className="text-center">
          <div className="mb-0 pt-100">
            {/* Robot image here */}
            <div className="w-screen mx-auto bg-black flex items-center justify-center overflow-hidden">
              <img
                src="./images/robot.png"
                alt="Team 3588 Robot"
                className="w-screen h-full object-cover fade-mask"
              />
              {/* READY FOR TAKEOFF again, might just photoshop this into robot.png */}
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