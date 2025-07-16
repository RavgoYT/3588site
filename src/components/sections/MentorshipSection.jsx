import React, { useState, useEffect } from "react";
import InteractiveSubteamChart from "../ui/interactiveChart/InteractiveSubteamChart";
import subteamData from "../../assets/subteamInfo.json";
import { Box, Hammer, Zap, Code, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Box,
  Hammer,
  Zap,
  Code,
  Camera,
};

const MentorshipSection = () => {
  const [activeTeam, setActiveTeam] = useState('cad');
  const [isLandscape, setIsLandscape] = useState(false);

  // Attach icon components to subteam data
  const subteams = subteamData.map(team => ({
    ...team,
    icon: iconMap[team.icon] ? React.createElement(iconMap[team.icon], { className: "w-10 h-10" }) : null,
  }));

  const activeSubteam = subteams.find(team => team.key === activeTeam);

  useEffect(() => {
    const checkOrientation = () => {
      const isWide = window.innerWidth > window.innerHeight && window.innerWidth >= 1024;
      setIsLandscape(isWide);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const renderContentBoxes = (landscapeMode = false) => (
    <div className="flex flex-col gap-4">
      {/* These r the description and skills boxes */}
      <motion.div
        className={`flex ${landscapeMode ? 'gap-6' : 'flex-col sm:flex-row gap-4 sm:gap-6'}`}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          className={`${landscapeMode ? 'w-1/2' : 'sm:w-1/2'} flex-1`}
          style={{ 
            background: 'linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))' 
          }}
          initial={{ opacity: 0, x: -30, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className={`${landscapeMode ? 'p-6' : 'p-4 sm:p-6'} h-full flex flex-col`}>
            <h3 className={`${landscapeMode ? 'text-lg' : 'text-base sm:text-lg'} font-bold mb-4 text-white tracking-wide`}
                style={{ fontFamily: 'HK Modular, sans-serif' }}>
              DESCRIPTION
            </h3>
            <div className="space-y-4 flex-1">
              {activeSubteam.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-white leading-relaxed text-sm" style={{ fontFamily: 'TT Norms Pro, sans-serif' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className={`${landscapeMode ? 'w-1/2' : 'sm:w-1/2'} flex-1`}
          style={{ 
            background: 'linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))'
          }}
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={`${landscapeMode ? 'p-6' : 'p-4 sm:p-6'} h-full flex flex-col`}>
            <h3 className={`${landscapeMode ? 'text-lg' : 'text-base sm:text-lg'} font-bold mb-4 text-white tracking-wide`}
                style={{ fontFamily: 'HK Modular, sans-serif' }}>
              SKILLS
            </h3>
            <ul className="list-disc pl-5 space-y-3 flex-1">
              {activeSubteam.skills.map((skill, index) => (
                <li key={index} className="text-white leading-relaxed text-sm" style={{ fontFamily: 'TT Norms Pro, sans-serif' }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
      {/* Sub-Team Leadership Section */}
      <motion.div
        className="w-full"
        style={{ 
          background: 'linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        <div className={`${landscapeMode ? 'p-6' : 'p-4 sm:p-6'}`}>
          <h3 className={`${landscapeMode ? 'text-lg' : 'text-base sm:text-lg'} font-bold mb-16 text-white tracking-wide pl-1`}
              style={{ fontFamily: 'HK Modular, sans-serif' }}>
            SUB-TEAM LEADERSHIP
          </h3>
          <div className="flex justify-center gap-8 sm:gap-12">
            {activeSubteam.leadership.map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white mb-3 flex items-center justify-center">
                  {leader.avatar ? (
                    <img src={leader.avatar} alt={leader.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-300"></div>
                  )}
                </div>
                <p className="text-white text-xs sm:text-sm font-medium text-center" style={{ fontFamily: 'TT Norms Pro, sans-serif' }}>{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  // the text on the left side. probs dont wanna hard code this either. ill fix that later.
  return (
    <div className="min-h-screen flex flex-col pt-2 pb-4 px-2 sm:pt-3 sm:pb-6 sm:px-4 lg:pt-4 lg:pb-8 lg:px-8">
      <div className="max-w-7xl mx-auto flex-1 flex flex-col mt-0">
        {/* Main Content */}
        {isLandscape ? (
          <motion.div
            className="flex-1 flex gap-12 items-start"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Left Column - Intro Text */}
            <motion.div
              className="w-1/3 flex flex-col justify-start"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  While we are primarily student-led in teaching our skills, it's important to have an expert to provide young minds with new perspectives and new skills that were never taught before. Mentors fulfill that need for an "expert", and coming in only for a few hours a week can be enough to get students inspired and motivated for robotics.
                </p>
                <p>
                  To the right is an interactive chart of the subteams in which our team operates{' '}
                  <span className="italic">(click the subteam icons for more information about that subteam)</span>. 
                  If you are interested in mentoring in any of the subteams listed, then feel free to email us about your inquiry. 
                  Even if you are not an expert in the topics provided, simply a new perspective can go a long way in our success.
                </p>
              </div>
            </motion.div>
            {/* Right Section */}
            <motion.div
              className="w-2/3 flex flex-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <InteractiveSubteamChart subteams={subteams} activeTeam={activeTeam} setActiveTeam={setActiveTeam} landscapeMode={true} />
              {renderContentBoxes(true)}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Intro Text at top for portrait. Is there a better way to do this for mobile? Eddy you'll probs see this while ur doing mobile ui and shake your head lol */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  While we are primarily student-led in teaching our skills, it's important to have an expert to provide young minds with new perspectives and new skills that were never taught before. Mentors fulfill that need for an "expert", and coming in only for a few hours a week can be enough to get students inspired and motivated for robotics.
                </p>
                <p>
                  Below is an interactive chart of the subteams in which our team operates{' '}
                  <span className="italic">(click the subteam icons for more information about that subteam)</span>. 
                  If you are interested in mentoring in any of the subteams listed, then feel free to email us about your inquiry. 
                  Even if you are not an expert in the topics provided, simply a new perspective can go a long way in our success.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <InteractiveSubteamChart subteams={subteams} activeTeam={activeTeam} setActiveTeam={setActiveTeam} landscapeMode={false} />
              {renderContentBoxes(false)}
            </motion.div>
          </motion.div>
        )}
      </div>
      {/* The call to action thing */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        <h2 className="text-lg sm:text-lg font-bold tracking-[0.2em] text-white mb-8"
            style={{ fontFamily: 'HK Modular, sans-serif' }}>
          INTERESTED IN SIGNING UP TO MENTOR OR HAVE QUESTIONS?
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf3CEYRFiTSqTRevbfUh1hhwWLFUK2HFYo_NsTJTmWRXdPgCQ/viewform?usp=sharing&ouid=101389165596220670387"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ 
            background: 'linear-gradient(90deg, #6586c7, #e23942)',
            letterSpacing: '0.1em'
          }}
        >
          MENTOR INTEREST FORM
        </a>
      </motion.div>
    </div>
  );
};

export default MentorshipSection;
