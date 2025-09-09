import React, { useState, useEffect, act } from "react";
import InteractiveSubteamChart from "../ui/interactiveChart/InteractiveSubteamChart";
import { Box, Hammer, Zap, Code, Camera, Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import { contentfulClient } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { sub } from "framer-motion/client";
import BiographyModal from "../ui/BiographyModal";

const iconMap = {
	Clipboard,
	Box,
	Hammer,
	Zap,
	Code,
	Camera,
};

const SubteamSection = () => {
	const [activeTeam, setActiveTeam] = useState("cad");
	const [activeTeamData, setActiveTeamData] = useState(null);
	const [isLandscape, setIsLandscape] = useState(false);
	const [subteams, setSubteams] = useState();
	const [showModal, setShowModal] = useState(false);
	const [activeLead, setActiveLead] = useState({});

	const SUBTEAM_KEYS = [
		{ key: "pm", title: "PM", icon: <Clipboard size="45" /> },
		{ key: "cad", title: "CAD", icon: <Box size="45" /> },
		{ key: "programming", title: "Programming", icon: <Code size="45" /> },
		{ key: "electrical", title: "Electrical", icon: <Zap size="45" /> },
		{ key: "fab", title: "Fabrication", icon: <Hammer size="45" /> },
		{ key: "outreach", title: "Outreach", icon: <Camera size="45" /> },
	];

	const changeActiveTeam = (teamKey) => {
		setActiveTeam(teamKey);
		setActiveTeamData(subteams.find((team) => team.key === teamKey));
	};

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const entries = await contentfulClient.getEntries({
					content_type: "subteam",
				});
				const subteamData = entries.items.map((item) => ({
					...item.fields,
					key: item.fields.name.toLowerCase(),
				}));
				setSubteams(subteamData);
				setActiveTeamData(subteamData.find((team) => team.key === "cad")); // Default to CAD - this shouldn't be set here but oh well
			} catch (error) {
				console.error("Error fetching data from Contentful:", error);
				return [];
			}
		};
		fetchContent();
	}, []);

	useEffect(() => {
		const checkOrientation = () => {
			const isWide =
				window.innerWidth > window.innerHeight && window.innerWidth >= 1024;
			setIsLandscape(isWide);
		};
		checkOrientation();
		window.addEventListener("resize", checkOrientation);
		window.addEventListener("orientationchange", checkOrientation);
		return () => {
			window.removeEventListener("resize", checkOrientation);
			window.removeEventListener("orientationchange", checkOrientation);
		};
	}, []);

	const renderContentBoxes = (landscapeMode = false) => (
		<div className="flex flex-col gap-4">
			{/* These r the description and skills boxes */}
			<motion.div
				className={`flex ${landscapeMode ? "gap-6" : "flex-col md:flex-row gap-4 md:gap-6"
					}`}
				initial={{ opacity: 0, y: 40, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<motion.div
					className={`${landscapeMode ? "w-1/2" : "sm:w-full"} flex-1`}
					style={{
						background:
							"linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))",
					}}
					initial={{ opacity: 0, x: -30, rotate: -2 }}
					whileInView={{ opacity: 1, x: 0, rotate: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
				>
					<div
						className={`${landscapeMode ? "p-6" : "p-4 sm:p-6"
							} h-full flex flex-col`}
					>
						<h3
							className={`${landscapeMode ? "text-lg" : "text-base sm:text-lg"
								} font-bold mb-4 text-white tracking-wide`}
							style={{ fontFamily: "HK Modular, sans-serif" }}
						>
							DESCRIPTION
						</h3>
						<div
							className="space-y-4 flex-1 leading-relaxed text-sm"
							style={{ fontFamily: "TT Norms Pro, sans-serif" }}
						>
							{activeTeamData?.description &&
								documentToReactComponents(activeTeamData.description)}
						</div>
					</div>
				</motion.div>
				<motion.div
					className={`${landscapeMode ? "w-1/2" : "sm:w-full"} flex-1`}
					style={{
						background:
							"linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))",
					}}
					initial={{ opacity: 0, x: 30, rotate: 2 }}
					whileInView={{ opacity: 1, x: 0, rotate: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				>
					<div
						className={`${landscapeMode ? "p-6" : "p-4 sm:p-6"
							} h-full flex flex-col`}
					>
						<h3
							className={`${landscapeMode ? "text-lg" : "text-base sm:text-lg"
								} font-bold mb-4 text-white tracking-wide`}
							style={{ fontFamily: "HK Modular, sans-serif" }}
						>
							SKILLS
						</h3>
						<div
							className="leading-relaxed text-sm"
							style={{ fontFamily: "TT Norms Pro, sans-serif" }}
						>
							{activeTeamData?.skills &&
								documentToReactComponents(activeTeamData.skills)}
						</div>
					</div>
				</motion.div>
			</motion.div>
			{/* Sub-Team Leadership Section */}
			<motion.div
				className="w-full"
				style={{
					background:
						"linear-gradient(90deg, rgba(101, 134, 199, 0.44), rgba(226, 57, 66, 0.44))",
				}}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
			>
				<div className={`${landscapeMode ? "p-6" : "p-4 sm:p-6"}`}>
					<h3
						className={`${landscapeMode ? "text-lg" : "text-base sm:text-lg"
							} font-bold mb-16 text-white tracking-wide pl-1`}
						style={{ fontFamily: "HK Modular, sans-serif" }}
					>
						SUB-TEAM LEADERSHIP
					</h3>
					<div className="pt-3 flex flex-col md:flex-row justify-center gap-8 sm:gap-12">
						{Array.isArray(activeTeamData?.leads) &&
							activeTeamData.leads.map((leader, index) => (
								<div
									key={index}
									className="flex flex-col items-center "
									onClick={() => {
										setActiveLead(leader.fields);
										setShowModal(true);
									}}
								>
									<div
										className="w-24 h-24 rounded-full  mb-3 flex items-center justify-center cursor-pointer"
										style={{
											background: "linear-gradient(90deg, #6586c7, #e23942)",
										}}
									>
										{leader.fields.picture ? (
											<img
												src={leader.fields.picture.fields.file.url}
												alt={leader.name}
												className="w-full h-full rounded-full object-cover"
											/>
										) : (
											<div className="w-full h-full rounded-full bg-gray-300"></div>
										)}
									</div>
									<div className="flex flex-col">
										<p
											className="text-white text-md sm:text-lg font-bold text-center"
											style={{ fontFamily: "TT Norms Pro, sans-serif" }}
										>
											{leader.fields.name}
										</p>
										<p
											className="text-white text-sm sm:text-lg font-medium text-center"
											style={{ fontFamily: "TT Norms Pro, sans-serif" }}
										>
											{leader.fields.role}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</motion.div>
		</div>
	);

	// the text on the left side. probs dont wanna hard code this either. ill fix that later.
	return (
		<div className="relative">

			<BiographyModal activeLead={activeLead} setShowModal={setShowModal} showModal={showModal} />
			<div className="relative flex flex-col pt-2 pb-4 px-8 sm:pt-3 sm:pb-6 sm:px-15 lg:pt-4 lg:pb-8 lg:px-8 items-center">
				<div className="max-w-screen flex-1 flex flex-col mt-0 mb-5 mx-5 md:max-w-7xl md:mx-auto w-full items-center justify-center">
					{/* Main Content */}
					{isLandscape ? (
						<motion.div
							className="flex-1 flex gap-12 items-start"
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
						>
							{/* Left Column - Intro Text */}
							<motion.div
								className="w-1/3 flex flex-col justify-start"
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
							>
								<div className="space-y-6 text-sm leading-relaxed">
									<p>
										Our team is divided into several subteams, each focusing on
										a specific aspect of robotics. Generally members will help
										in multiple subteams, but will specialize in a specific one,
										learning advanced skills in that area.
									</p>
									<p>
										To the right is an interactive chart of the subteams in
										which our team operates{" "}
										<span className="italic">
											(click the subteam icons for more information about that
											subteam)
										</span>
										.
									</p>
									<p>
										Each of our subteams have student leads and adult mentors.
										Click on their profiles to learn more about them.
									</p>
								</div>
							</motion.div>
							{/* Right Section */}
							<motion.div
								className="w-2/3 flex flex-col"
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
							>
								{activeTeam !== null && (
									<>
										<InteractiveSubteamChart
											subteams={SUBTEAM_KEYS}
											activeTeam={activeTeam}
											setActiveTeam={changeActiveTeam}
											landscapeMode={true}
										/>
										{renderContentBoxes(true)}
									</>
								)}
							</motion.div>
						</motion.div>
					) : (
						<motion.div
							className="flex-1 flex flex-col"
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
						>
							{/* Intro Text at top for portrait. Is there a better way to do this for mobile? Eddy you'll probs see this while ur doing mobile ui and shake your head lol */}
							<motion.div
								className="mb-8"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
							>
								<div className="space-y-6 text-sm leading-relaxed">
									<p>
										Our team is divided into several subteams, each focusing on
										a specific aspect of robotics.
									</p>
									<p>
										Below is an interactive chart of the subteams in which our
										team operates{" "}
										<span className="italic">
											(click the subteam icons for more information about that
											subteam)
										</span>
										. If you are interested in mentoring in any of the subteams
										listed, then feel free to email us about your inquiry. Even
										if you are not an expert in the topics provided, simply a
										new perspective can go a long way in our success.
									</p>
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
							>
								<InteractiveSubteamChart
									subteams={SUBTEAM_KEYS}
									activeTeam={activeTeam}
									setActiveTeam={changeActiveTeam}
									landscapeMode={false}
								/>
								{renderContentBoxes(false)}
							</motion.div>
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SubteamSection;
