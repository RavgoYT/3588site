import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BubbleMenu from "./BubbleMenu";

const ScrollLink = ({ section, currentSection, onClick, className = "" }) => {
	return (
		<a
			href={`#${section}`}
			className={`header-link font-sans transition ${className} ${currentSection === section
					? "font-[700] text-[var(--color-poppy)]"
					: "font-[400] text-[var(--color-poppy)] hover:font-[700]"
				}`}
			onClick={(e) => {
				e.preventDefault();
				onClick(section);
			}}
		>
			{section.charAt(0).toUpperCase() + section.slice(1)}
		</a>
	);
};

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [currentSection, setCurrentSection] = useState("home");
	const headerRef = useRef(null);

	const sections = ["home", "about", "newsfeed", "sponsors", "subteams", "mentors", "contact"];
	const mobileSections = [
		{section: "home", bg:"#6687c8", text:'text-white'},
		{section: "about", bg:"#e23942", text:'text-white'},
		{section: "newsfeed", bg:"#cb6ce6", text:'text-white'},
		{section: "sponsors", bg:"#c8c866", text:'text-black'},
		{section: "subteams", bg:"#a875f7", text:'text-white'},
		{section: "mentors", bg:"#FDFCDC", text:'text-black'},
		{section: "contact", bg:"#FFD3DA", text:'text-black'},
		{section: "schedule", path: "/schedule", bg:"#88c7b5", text:'text-black'},
		{section: "gallery", path: "/gallery", bg:"#88c7b5", text:'text-black'},
	]
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);

			let detectedSection = "";
			const headerHeight = headerRef.current
				? headerRef.current.offsetHeight
				: 0;
			const scrollThreshold = window.scrollY + headerHeight + 50;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const elementTop = element.offsetTop;
					if (scrollThreshold >= elementTop) {
						detectedSection = sectionId;
					}
				}
			}

			if (window.scrollY < 100 && sections.length > 0) {
				detectedSection = sections[0];
			}

			if (detectedSection !== currentSection) {
				setCurrentSection(detectedSection);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [currentSection]);

	const handleClick = (section) => {
		setCurrentSection(section);

		const element = document.getElementById(section);
		const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

		if (element) {
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - headerHeight - 10;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			{/* Mobile NavBar */}
			<header
				ref={headerRef}
				className={`fixed min-[1150px]:hidden left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-[75%] z-50 rounded-2xl transition-all duration-450 ease-in-out backdrop-blur-lg bg-gradient-to-r from-[var(--color-navy-blue)]/60 to-[var(--color-poppy)]/60 ${scrolled ? "py-4 px-8" : "py-4 px-8"
					}`}
				style={{ top: scrolled ? "1.5rem" : 0 }}
			>
				<div className="flex flex-row items-center align-middle justify-between w-full">
					<div className="w-10 h-1o bg-white/0 rounded-sm hidden items-center justify-center sm:flex">
						<img
							src="./images/mainlogo.svg"
							alt="Team 3588 Logo"
							className="h-full w-auto"
						/>
					</div>
					<h1 className="uppercase !text-xl !mb-0">Team 3588</h1>
					<BubbleMenu
						handleClick={handleClick}
						menuAriaLabel="Toggle navigation"
						menuBg="#ffffff"
						menuContentColor="#111111"
						useFixedPosition={true}
						animationEase="back.out(1.5)"
						animationDuration={0.5}
						staggerDelay={0.12}
						items={mobileSections}
					/>
				</div>
			</header>
			{/* Desktop NavBar */}
			<header
				className={`hidden min-[1150px]:block fixed left-1/2 transform -translate-x-1/2 w-full max-w-[90%] z-50 rounded-2xl transition-all duration-450 ease-in-out backdrop-blur-lg bg-gradient-to-r from-[var(--color-navy-blue)]/60 to-[var(--color-poppy)]/60 ${scrolled ? "py-4 px-8" : "py-4 px-8"
					}`}
				style={{ top: scrolled ? "1.5rem" : 0 }}
			>
				<div className="flex flex-row justify-between items-center w-full">
					<div className="flex items-center space-x-6">
						<h1 className="!text-base select-none font-bold md:!text-2xl lg:!text-base xl:!text-2xl 2xl:!text-3xl">
							TEAM 3588
						</h1>
						<div className="h-12 w-12 bg-white/0 rounded-sm flex items-center justify-center">
							<img
								src="./images/mainlogo.svg"
								alt="Team 3588 Logo"
								className="h-full w-auto"
							/>
						</div>
						<h1 className="!text-base md:!text-3xl lg:!text-base select-none xl:!text-2xl 2xl:!text-3xl">
							THE TALON
						</h1>
					</div>
					<nav className="flex space-x-6">
						{sections.map((section) => (
							<ScrollLink
								key={section}
								section={section}
								currentSection={currentSection}
								onClick={handleClick}
							/>
						))}
						<Link to="/schedule" className="header-link font-sans transition font-[400] text-[var(--color-poppy)] hover:font-[700]">
							Schedule
						</Link>
						<Link to="/gallery" className="header-link font-sans transition font-[400] text-[var(--color-poppy)] hover:font-[700]">
							Gallery
						</Link>
					</nav>
				</div>
			</header>
			
		</>
	);
}
