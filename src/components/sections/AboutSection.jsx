import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../ui/backgrounds/Particles";
import { fadeIn } from "../../utils/animations";

const AboutSection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine speed based on Tailwind breakpoints
  let particleSpeed = 0.1; // default speed
  if (windowWidth < 1280) {
    particleSpeed = 0.3; // faster for screens up to xl
  }

  const isMobile = windowWidth < 768;

	return (
		<section
			id="about"
			className="relative m-15 md:pt-120 pb-35 bg-var(--color-davy-gray)"
		>
			{!isMobile && (
				<div className="mt-20 absolute inset-0 -z-0">
					<Particles
						particleColors={["#ffffff", "#ffffff"]}
						particleCount={300}
						particleSpread={10}
						speed={particleSpeed}
						particleBaseSize={100}
						moveParticlesOnHover={false}
						alphaParticles={true}
						disableRotation={false}
					/>
				</div>
			)}
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
							We are Lindbergh High School's FIRST robotics team, "The Talon."
							Founded in 2011, we spend each year working and ally with hundreds
							of different teams & schools to build a robot for a game that
							changes every year.
						</p>
						<p className="mb-4">
							We are a student-led team, and focus on constant improvement each
							year, taking every opportunity to teach our community about
							robotics and STEM.
						</p>
						<p>
							<a href="#" className="hover:underline">
								Click here
							</a>{" "}
							to learn more about our team philosophies, goals, and our history.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
