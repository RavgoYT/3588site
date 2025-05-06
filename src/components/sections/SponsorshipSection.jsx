import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const SponsorshipSection = () => {
  const sponsorshipLevels = ['TALON HATCHLING', 'TALON FLEDGLING', 'TALON FULL'];
  
  return (
    <section id="sponsors" className="py-12">
      <div className="container mx-auto px-8">
        {/* Horizontal sponsorship levels */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {sponsorshipLevels.map((title, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <div className="rounded-xl w-64 h-64 flex items-center justify-center mb-4 overflow-hidden"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))',
                }}
              >
                <img
                  src={`/api/placeholder/${400 + index}/${400 + index}`}
                  alt={`${title} Sponsorship Level`}
                  className="w-screen h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-display font-bold">{title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-4">
            Passion can only get us so far, as while FIRST does provide us with some assistance, we still need additional
            funds to buy robot components and food to feed students. Sponsorships can drastically supplement this issue as
            it not only gives us a financial resource, but sponsorships are a huge morale booster for our students, who can
            see that members of their community believe in their mission.
          </p>
          <p>
            Please take a look at the 3 preset sponsorship deals that we offer on our website by clicking on each badge
            respectively. For further inquiries, please email us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;