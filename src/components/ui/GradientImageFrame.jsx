import React from "react";

const GradientImageFrame = ({ children }) => {
  return (
    <div
      className="rounded-3xl p-2.5 md:p-3"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
      }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
};

export default GradientImageFrame;