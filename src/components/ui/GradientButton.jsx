// GradientButton.js

import React from "react";

const GradientButton = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // 👇 Updated classes here
      className="uppercase inline-flex items-center justify-center rounded-lg bg-gradient-to-r py-4 px-8 from-[#6586c7] to-[#e23942] font-bold text-white tracking-[0.1em] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      {children}
    </a>
  );
};

export default GradientButton;