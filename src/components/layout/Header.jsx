import { useState, useEffect, useRef } from "react";
import HamburgerMenu from "../ui/HamburgerMenu";
import { motion, AnimatePresence } from "framer-motion";

const Link = ({ section, currentSection, onClick, className = "" }) => {
	return (
		<a
			href={`#${section}`}
			className={`header-link font-sans transition ${className} ${
				currentSection === section
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
	const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
	const headerRef = useRef(null);

	const sections = ["home", "about", "newsfeed", "sponsors", "contact"];

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
		setMenuOpen(false); // Close menu on link click

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
				className={`fixed min-[1150px]:hidden top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[75%] z-50 rounded-2xl transition-all duration-450 ease-in-out backdrop-blur-lg 
          ${
						scrolled ? "py-4 px-8 top-6" : "py-4 px-8 top-0"
					} bg-gradient-to-r from-[var(--color-navy-blue)]/60 to-[var(--color-poppy)]/60`}
			>
				<div className="flex flex-row items-center align-middle justify-between w-full">
					<div className="w-10 h-1o bg-white/0 rounded-sm flex items-center justify-center">
						<img
							src="./images/mainlogo.svg"
							alt="Team 3588 Logo"
							className="h-full w-auto"
						/>
					</div>
					<h1 className="uppercase !text-2xl !mb-0">Team 3588</h1>
					<HamburgerMenu onClick={() => setMenuOpen(true)} />
				</div>
			</header>
			{/* Desktop NavBar */}
			<header
				className={`hidden min-[1150px]:block fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[75%] z-50 rounded-2xl transition-all duration-450 ease-in-out backdrop-blur-lg ${
					scrolled ? "py-4 px-8 top-6" : "py-4 px-8 top-0"
				} bg-gradient-to-r from-[var(--color-navy-blue)]/60 to-[var(--color-poppy)]/60`}
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
							<Link
								key={section}
								section={section}
								currentSection={currentSection}
								onClick={handleClick}
							/>
						))}
					</nav>
				</div>
			</header>
			{/* Fullscreen Hamburger Menu Overlay */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						key="mobile-menu-overlay"
						initial={{
							scaleX: 0,
							scaleY: 0,
							opacity: 0,
							originX: 0,
							originY: 0,
						}}
						animate={{
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							originX: 0,
							originY: 0,
						}}
						exit={{ scaleX: 0, scaleY: 0, opacity: 0, originX: 0, originY: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
						className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-r from-[var(--color-poppy)] to-[var(--color-navy-blue)]"
						style={{ transformOrigin: "top left" }}
					>
						<button
							className="absolute top-8 right-8 text-white text-4xl font-bold focus:outline-none"
							aria-label="Close menu"
							onClick={() => setMenuOpen(false)}
						>
							&times;
						</button>
						<nav className="flex flex-col space-y-10 text-3xl font-bold">
							{sections.map((section) => (
								<Link
									key={section}
									section={section}
									currentSection={currentSection}
									onClick={handleClick}
									className="text-white"
								/>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
