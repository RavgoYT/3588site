// HamburgerMenu.jsx
import React from 'react';

export default function HamburgerMenu({ onClick }) {
  return (
    <button
      className="p-2 focus:outline-none"
      aria-label="Open menu"
      onClick={onClick}
    >
      <span className="block w-6 h-1 bg-white mb-1 rounded transition-all"></span>
      <span className="block w-6 h-1 bg-white mb-1 rounded transition-all"></span>
      <span className="block w-6 h-1 bg-white rounded transition-all"></span>
    </button>
  );
}
