import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-black">
      <div className="container mx-auto px-8 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-red-400 transition">
            <Youtube size={24} />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <Mail size={24} />
          </a>
        </div>
        <p className="mt-4 text-gray-400">Email us for inquiries and check out our socials!</p>
      </div>
    </section>
  );
};

export default ContactSection;