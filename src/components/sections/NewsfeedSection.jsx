import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import SliderDots from '../ui/SliderDots';

const NewsfeedSection = () => {
  return (
    <section id="newsfeed" className="py-0 bg-black">
      <div className="container mx-auto px-8">
        {/* "Brought to you by" with logo */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center text-m text-var(--color-ghost-white)">
            <span>brought to you by</span>
            <div className="ml-2 bg-gray-800 px-3 py-1 flex items-center">
              <div className="w-6 h-6 bg-gray-700 mr-2 flex items-center justify-center">
                {/* temporarily using text here to simulate what it would look like. Need an SVG of it. */}
                <span className="text-xs font-mono">LOGO</span>
              </div>
              <span className="font-mono">LBB Logo</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* News Image Slider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-8"
          >
            <div className="rounded-xl aspect-video flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))',
              }}
            >
              <img
                src=""
                alt="News Image"
                className="w-screen h-full object-cover"
              />
            </div>
            <SliderDots count={5} active={0} />
          </motion.div>

          <div className="bg-black/50 p-4 rounded">
            <p className="mb-4 italic">
              Lindbergh students recently attended the Seattle FanExpo to
              present their robot and let the community learn about how it
              works. Click the screen for our media gallery of the event!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900 px-2 py-1 text-xs rounded-md font-mono">TAGS</span>
              <span className="bg-purple-900 px-2 py-1 text-xs rounded-md font-mono">ON INSTAGRAM</span>
              <span className="bg-team-red-900 px-2 py-1 text-xs rounded-md font-mono">SUMMER EVENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsfeedSection;