import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import Icons from "../../assets/Icons";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import biographyData from "../../assets/biographyData.json";
import BiographyCard from "./BiographyCard";

export const MentorshipCard = ({
	title,
	description,
	iconName,
	leads,
	mentors,
	longDescription,
}) => {
	const [showModal, setShowModal] = useState(false);
	const IconComponent = useMemo(
		() => Icons[iconName] || Icons["defaultIcon"],
		[iconName]
	);

	const leadCards = useMemo(() => {
		if (!leads || leads.length === 0) return null;
		return leads.map((name) => {
			const lead = biographyData.leads[name];
			if (!lead) return null;
			return (
				<BiographyCard
					key={lead.name}
					name={lead.name}
					description={lead.description}
					imageUrl={lead.image}
				/>
			);
		});
	}, [leads]);

  const mentorCards = useMemo(() => {
		if (!mentors || mentors.length === 0) return null;
		return mentors.map((name) => {
			const mentor = biographyData.mentors[name];
			if (!mentor) return null;
			return (
				<BiographyCard
					key={mentor.name}
					name={mentor.name}
					description={mentor.description}
					imageUrl={mentor.image}
				/>
			);
		});
	}, [mentors]);


	return (
		<>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={fadeIn}
				whileHover={{ scale: 1.05 }}
				className="bg-gray-900/50 p-4 rounded cursor-pointer transition-transform duration-200"
				onClick={() => setShowModal(true)}
			>
				<div className="flex items-center mb-3">
					<div className="w-8 h-8 rounded-full bg-team-red-700 flex items-center justify-center mr-2">
						<span className="">
							{<IconComponent size={25}></IconComponent>}
						</span>
					</div>
					<h3 className="text-lg font-display font-bold">{title}</h3>
				</div>
				<div className="text-sm">
					<p>{description}</p>
				</div>
			</motion.div>
			<Modal
				className="bg-gray-900/50"
				dialogClassName="w-auto"
				data-bs-theme="dark"
				show={showModal}
				backdrop="static"
				onHide={() => setShowModal(false)}
				centered
			>
				<Modal.Header closeButton>
					<IconComponent size={25} className="mr-3" />
					<Modal.Title className="">{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<ReactMarkdown>{longDescription}</ReactMarkdown>
					</div>
					<div>
						<strong>Current Lead(s):</strong> <br />
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
							{leadCards && leadCards.filter(Boolean).length > 0 ? (
								leadCards
							) : (
								<p className="text-center text-gray-500 col-span-full">
									There are currently no leads.
								</p>
							)}
						</div>
						<br />
						<strong>Current Mentors:</strong> <br />
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
							{mentorCards && mentorCards.filter(Boolean).length > 0 ? (
								mentorCards
							) : (
								<p className="text-center text-gray-500 col-span-full">
									There are currently no leads.
								</p>
							)}
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
