import React, { useEffect, useState } from "react";
import { contentfulClient } from "../../utils/contentful";
import GradientFrame from "../ui/GradientFrame";
import { motion } from "framer-motion";


const MentorshipSection = () => {
	const [mentorImageUrl, setMentorImageUrl] = useState("");

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const mentorImage = await contentfulClient.getAsset(
					"4pQLN2wDcYhqC39U65Q4Mw"
				);
				setMentorImageUrl(mentorImage.fields.file.url);
			} catch (error) {
				console.error("Error fetching data from Contentful:", error);
			}
		};
		fetchContent();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center pt-2 px-4 md:px-12 max-w-screen gap-12">
			<div className="flex flex-col md:flex-row items-center gap-12 max-w-full md:max-w-[80%]">
				<div className="w-full md:w-1/2 flex justify-center">
					{mentorImageUrl ? (
						<GradientFrame>
							<img
								src={mentorImageUrl}
								className="w-full h-full object-cover"
								alt="Mentor"
							/>
						</GradientFrame>
					) : (
						<div>Loading...</div>
					)}
				</div>
				<div className="w-full md:w-1/2 space-y-6 text-sm leading-relaxed">
					<p>
						Although we are primarily a student led team, we rely on mentors to
						help provide the experience and advanced knowledge needed to
						successfully build a functioning robot, manage a team, and
						fundraise.
					</p>
					<p>
						Whether you are an expect in a technical field or just love robots,
						there is a place for you on our team! New perspectives are always
						helpful in our process.
					</p>
          <p>See the section above to learn more about our subteams, the skills that go into them, and their current leadership</p>
				</div>
			</div>
      <motion.div
				className="md:mt-16 text-center"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
			>
				<h2
					className="text-lg font-bold tracking-[0.2em] text-white mb-8"
					style={{ fontFamily: "HK Modular, sans-serif" }}
				>
					INTERESTED IN SIGNING UP TO MENTOR OR HAVE QUESTIONS?
				</h2>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSf3CEYRFiTSqTRevbfUh1hhwWLFUK2HFYo_NsTJTmWRXdPgCQ/viewform?usp=sharing&ouid=101389165596220670387"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-6 inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style={{
						background: "linear-gradient(90deg, #6586c7, #e23942)",
						letterSpacing: "0.1em",
					}}
				>
					MENTOR INTEREST FORM
				</a>
			</motion.div>
		</div>
	);
};

export default MentorshipSection;
