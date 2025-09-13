import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BaseModal = ({ showModal, setShowModal, children, renderHeader }) => {
  if (!showModal) {
    return null;
  }

  const animationProps = {
    initial: { opacity: 0.75, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0.5, y: 30, scale: 0.98 },
    transition: { type: 'tween', duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Layer 1: The Blurred Gradient Border */}
            <motion.div
              {...animationProps}
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl opacity-75 blur"
              aria-hidden="true"
            ></motion.div>

            {/* Layer 2: The Modal Content */}
            <motion.div
              {...animationProps}
              className="relative bg-gray-900/90 rounded-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-gray-700">
                  {/* Render the custom header content if provided */}
                  {renderHeader ? renderHeader() : <div />}
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Body Content (passed as children) */}
                <div className="py-6 overflow-y-auto flex-grow text-gray-300 prose prose-invert">
                  {children}
                </div>

                {/* Footer */}
                <div className="flex justify-end pt-4 border-t border-gray-700">
                  <button
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BaseModal;
