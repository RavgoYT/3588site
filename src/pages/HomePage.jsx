import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SectionDivider from "../components/ui/SectionDivider";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import NewsfeedSection from "../components/sections/NewsfeedSection.jsx";
import SponsorshipSection from "../components/sections/SponsorshipSection";
import SubteamSection from "../components/sections/SubteamSection";
import ContactSection from "../components/sections/ContactSection";
import MentorshipSection from "../components/sections/MentorshipSection.jsx";

export default function HomePage() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{" "}
			{/* Add padding top to account for fixed header */}
			{/* Hero Section */}
			<HeroSection scrollY={scrollY} />
			{/* About Section */}
			<AboutSection />
			{/* Section Divider */}
			<SectionDivider title="NEWSFEED" />
			{/* Newsfeed Section */}
			<NewsfeedSection />
			{/* Section Divider */}
			<SectionDivider title="SPONSORSHIP INFO" />
			{/* Sponsorship Section */}
			<SponsorshipSection />
			{/* Section Divider */}
			<SectionDivider title="SUBTEAM INFO" id="subteams" />
			{/* Mentorship Section */}
			<SubteamSection />
			<SectionDivider title="MENTORSHIP" id="mentors" />
			<MentorshipSection />
			{/* Section Divider */}
			<SectionDivider title="CONTACT US !!!" />
			{/* Contact Section */}
			<ContactSection />
		</>
	);
}
