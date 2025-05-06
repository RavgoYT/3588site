import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-12 bg-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <p className="mb-4 text-sm">
                While we are primarily student-led in teaching
                and decision making, having adult mentors
                provide young minds with new perspectives
                and new skills that seem more industry ready!
                Mentors fulfill that need for an "expert", and
                typically apply for a few hours a week outside
                of the normal work day to engage the
                motivated for robotics.
              </p>
              <p className="text-sm">
                To the right is an interactive chart of the
                categories in which our team operates below.
                Click through the chart for a brief breakdown
                (not extensive) If you are interested in
                mentoring in any of the tabs/skills listed, then
                feel free to email us about your inquiry. Even if
                you are not an expert in the area, having
                general knowledge can go a long way in
                our success.
              </p>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-900/50 p-4 rounded"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-team-red-700 flex items-center justify-center mr-2">
                    <span className="font-bold">#</span>
                  </div>
                  <h3 className="text-lg font-display font-bold">FABRICATION</h3>
                </div>
                <div className="text-sm">
                  <p>The art of a variety of different tools and techniques including CAD, CNC, milling, lathes, laser cutters, 3D printing, & cold saw, pneumatics, and optimizing faculty supply.</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-900/50 p-4 rounded"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-team-blue-700 flex items-center justify-center mr-2">
                    <span className="font-bold font-mono">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-lg font-display font-bold">PROGRAMMING</h3>
                </div>
                <div className="text-sm">
                  <p>• Design safety protocols as a first priority</p>
                  <p>• Proper sensor management</p>
                  <p>• PID control / closed-loop, optimizing battery safety</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-900/50 p-4 rounded"
              >
                <h3 className="text-lg font-display font-bold mb-2">DESCRIPTION</h3>
                <div className="text-sm">
                  <p>Find mentors with a history of working with teenagers and industry-level teams in our school's shop (email/info: "Team Leader").</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gray-900/50 p-4 rounded"
              >
                <h3 className="text-lg font-display font-bold mb-2">SKILLS</h3>
                <div className="text-sm">
                  <p>Fabrication also builds the practical feel that will be used as preparation before competition.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;