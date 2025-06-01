import React from 'react';

/**
 * Renders dots for image slider navigation
 * @param {Object} props
 * @param {number} props.count - Total number of dots
 * @param {number} props.active - Index of the active dot
 */
const SliderDots = ({ count, active }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-6 h-6 rounded-full border-6 border-white flex items-center justify-center"
        >
          <div className="w-4 aspect-square flex items-center rounded-full"
            style={{
              backgroundColor: i === active ? '#3B82F6' : 'transparent'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderDots;
