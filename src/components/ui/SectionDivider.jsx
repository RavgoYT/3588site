import React from 'react';

/**
 * Renders a section divider with optional title
 * @param {Object} props
 * @param {string} [props.title] - Optional title to display in the divider
 */
const SectionDivider = ({ title, id }) => {
  return (
    <div className="w-screen py-8 flex items-center justify-center" id={id}>
      {/* Adjust border width here */}
      <div className="w-1/3 border-t-4 border-dashed border-var(--color-ghost-white)"></div>
      {title && (
        <div className="px-6 text-2xl font-display font-bold text-center" style={{ fontFamily: "'HK Modular', sans-serif" }}>
          {title}
        </div>
      )}
      <div className="w-1/3 border-t-4 border-dashed border-var(--color-ghost-white)"></div>
    </div>
  );
};

export default SectionDivider;