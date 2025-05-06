import React from 'react';

/**
 * Renders dots for image slider navigation
 * @param {Object} props
 * @param {number} props.count - Total number of dots
 * @param {number} props.active - Index of the active dot
 */
const SliderDots = ({ count, active }) => {
  return (
    <div className="flex justify-center space-x-2 mt-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i === active ? 'bg-white' : 'bg-gray-500'}`}
        />
      ))}
    </div>
  );
};

export default SliderDots;