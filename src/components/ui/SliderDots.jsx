import React from "react";
import { motion } from "framer-motion";

/**
 * Renders dots for image slider navigation with animated scaling outer and inner circles
 * @param {Object} props
 * @param {number} props.count - Total number of dots
 * @param {number} props.active - Index of the active dot
 * @param {(index: number) => void} props.onDotClick - Callback when a dot is clicked
 */
const SliderDots = ({ count, active, onDotClick }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="w-6 h-6 rounded-full border-6 border-white flex items-center justify-center cursor-pointer"
          initial={false}
          animate={{ scale: i === active ? 1.2 : 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={() => onDotClick && onDotClick(i)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onDotClick && onDotClick(i);
          }}
          aria-label={`Go to slide ${i + 1}`}
        >
          <motion.div
            className="w-4 aspect-square rounded-full"
            initial={false}
            animate={{
              backgroundColor: i === active ? "#3B82F6" : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SliderDots;
