//mainPage

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Dots on the image slider. They don't work either, just cosmetic for now.
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

// Section Divider with dotted line (this doesn't scale perfectly rn)
const SectionDivider = ({ title }) => {
  return (
    <div className="w-screen py-8 flex items-center justify-center">
      {/* Adjust border width here */}
      <div className="w-1/3 border-t-4 border-dashed border-var(--color-ghost-white)"></div>
      {title && (
        <div className="px-6 text-2xl font-display font-bold text-center" style={{ fontFamily: "'HK Modular', sans-serif" }}>
          {title}
        </div>
      )}
      <div className="w-1/3 border-t-4 border-dashed border-var(--color-ghost-white)"></div>
    </div>
  );
};


export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-'TT Norms Pro'">
      {/* Header import */}
      <Header />

      {/* Main content container supposedly with consistent margins */}
      
      <main className="pt-16 w-screen overflow-hidden"> {/* Add padding top to account for fixed header */}
        {/* Hero Section with Robot Image Black and fading into gray in the future*/}
        <section id="home" section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black z-0"></div>
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY * 0.001
            }}
          >
            <div className="text-center">
              <div className="mb-0 pt-100">
                {/* Robot image here */}
                <div className="w-screen mx-auto bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/robot.png"
                    alt="Team 3588 Robot"
                    className="w-screen h-full object-cover fade-mask"
                  />
                  {/* READY FOR TAKEOFF again, might just photoshop this into robot.png */}
                  <div className="absolute left-1/2 top-[79%] -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="takeoff-text">
                      READY FOR TAKEOFF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hello Section */}
        <section id="about" className="py-16 bg-var(--color-davy-gray)">
          <div className="w-5/6 container mx-auto px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-display font-bold mb-6">HELLO!</h2>
              <div className="max-w-3xl">
                <p className="mb-4">
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

        {/* Section Divider */}
        <SectionDivider title="NEWSFEED" />

        {/* Newsfeed Section */}
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
                    className={`w-screen h-full object-cover`}
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

        {/* Section Divider */}
        <SectionDivider title="SPONSORSHIP INFO" />

        {/* Sponsorship Section with gradient background. None of the backgrounds work rn*/}
        <section id="sponsors" className="py-12">
          <div className="container mx-auto px-8">
            {/* Horizontal sponsorship levels */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {['TALON HATCHLING', 'TALON FLEDGLING', 'TALON FULL'].map((title, index) => (
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
              <body className="mb-4">
                Passion can only get us so far, as while FIRST does provide us with some assistance, we still need additional
                funds to buy robot components and food to feed students. Sponsorships can drastically supplement this issue as
                it not only gives us a financial resource, but sponsorships are a huge morale booster for our students, who can
                see that members of their community believe in their mission.
              </body>
              <body>
                Please take a look at the 3 preset sponsorship deals that we offer on our website by clicking on each badge
                respectively. For further inquiries, please email us.
              </body>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <SectionDivider title="MENTORSHIP INFO" />

        {/* Mentorship Section with dark background */}
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

        {/* Section Divider */}
        <SectionDivider title="CONTACT US !!!" />

        {/* Contact Section */}
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
      </main>

      {/* Footer import*/}
      <Footer />
    </div>
  );
}