import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import { MentorshipCard } from "../ui/MentorshipCard";
import subteamCards from "../../assets/subteamCards.json";
import Button from 'react-bootstrap/Button';

const MentorshipSection = () => {
	const subteamSections = subteamCards.subteams ?? [];

	return (
		<section id="mentorship" className="py-20 bg-black">
			<div className="container mx-auto px-8 flex flex-col items-center">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="col-span-1">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeIn}
						>
							<p className="mb-4 text-sm">
								While we are primarily student-led in teaching and decision
								making, adult mentors provide the knowledge and experience to
								successfully bring our team and robot to life! Mentors fulfill
								that need for an expert, and typically help for a few hours a
								week or biweekly outside of the normal work day to provide
								guidance.
							</p>
							<p className="text-sm">
								To the right are the subteams in which our team operates. Click
								on the subteams for further information If you are interested in
								mentoring in any of the tabs/skills listed, then feel free to
								email us about your inquiry. Even if you are not an expert in
								the area, having general knowledge can go a long way in our
								success.
							</p>
						</motion.div>
					</div>

					<div className="col-span-1 md:col-span-2">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{subteamSections.map((data, index) => (
								<MentorshipCard key={index} {...data} />
							))}
						</div>
					</div>
				</div>
				<h3 className="uppercase pt-10 pb-3 text-center">
					Interested in signing up to mentor or have questions?
				</h3>
				<Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSf3CEYRFiTSqTRevbfUh1hhwWLFUK2HFYo_NsTJTmWRXdPgCQ/viewform?usp=sharing&ouid=101389165596220670387">Mentor Interest Form</Button>
			</div>
		</section>
	);
};

export default MentorshipSection;
