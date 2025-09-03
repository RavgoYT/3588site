import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const AboutSection = () => {
  return (
    <section id="about" className="pt-15 md:pt-90 pb-35 bg-var(--color-davy-gray)">
      <div className="w-5/6 container mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-5xl font-display font-bold mb-6">HELLO!</h2>
          <div className="max-w-3xl">
            <p className="mb-5">
              We are Lindbergh High School's FIRST robotics team,
              "The Talon." Founded in 2011, we spend each
              year working and ally with hundreds of different
              teams & schools to build a robot for a game that
              changes every year.
            </p>
            <p className="mb-4">
              We are a student-led team, and focus on constant
              improvement each year, taking every opportunity to
              teach our community about robotics and STEM.
            </p>
            <p>
              <a href="#" className="hover:underline">Click here</a> to learn more about our team philosophies,
              goals, and our history.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;