import React, { useState, useEffect } from "react";
import { contentfulClient } from "../../utils/contentful";
/**
 * Hero section with robot image and parallax effect
 * @param {Object} props
 * @param {number} props.scrollY - Current scroll position for parallax effect
 */
const HeroSection = ({ scrollY }) => {
	const [heroSectionContent, setHeroSectionContent] = useState("");
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Tailwind md breakpoint is 768px

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Get hero content from Contentful
	useEffect(() => {
		const fetchContent = async () => {
			try {
				const heroContent = await contentfulClient.getEntry(
					"1KzI7rmrpeyfxg3meEXHOi"
				);
				setHeroSectionContent(heroContent.fields);
			} catch (error) {
				console.error("Error fetching data from Contentful:", error);
			}
		};
		fetchContent();
	}, []);

	if (isMobile) {
		// Mobile hero section: text at top, no scroll effect, different layout
		return (
			<section
				id="home"
				className="relative h-screen flex items-center justify-center bg-black"
			>
				{/* <div className="w-full text-center">
          <p className="text-xl uppercase font-[TTNorms] tracking-[0.5rem] text-white">
            {heroSectionContent?.tagLine}
          </p>
        </div> */}
				<div className="w-full flex items-center justify-center">
					<img
						src={
							heroSectionContent?.mobileHeroImage?.fields?.file.url ||
							heroSectionContent?.desktopHeroImage?.fields?.file.url
						}
						alt="Team 3588 Robot"
						className="h-screen object-cover shadow-lg"
					/>
					<div className="absolute left-1/2 top-[79%] -translate-x-1/2 -translate-y-1/2 text-center">
						<p
							className="text-2xl uppercase md:text-3xl lg:text-4xl xl:text-6xl font-[TTNorms] tracking-[1rem] md:tracking-[2rem] text-white text-center p-3 rounded-2xl"
							style={{
								...(heroSectionContent?.useTagLineBackgroundMobile
									? {
										backgroundImage:
											"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
									}
									: {}),
							}}
						>
							{heroSectionContent?.tagLine}
						</p>
					</div>
				</div>
			</section>
		);
	}

	// Desktop hero section with parallax effect
	// Define a scroll threshold where the effect stops
	const threshold = window.innerHeight * 0.15; // 15% of viewport height
	const translateY = scrollY * 0.2 > threshold ? threshold : scrollY * 0.2;
	const opacity = 1 - (scrollY * 0.001 > 0.5 ? 0.5 : scrollY * 0.001); // Prevent opacity from going below 0.5

	return (
		<section
			id="home"
			className="relative h-screen flex items-center justify-center pb-15 md:pb-120 overflow-hidden"
		>
			<div className="absolute inset-0 z-0">{/* No gradient background */}</div>
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{
					transform: `translateY(${translateY}px)`,
					opacity: opacity,
				}}
			>
				<div className="text-center">
					<div className="mb-0 md:pt-32 lg:pt-40 xl:pt-40 2xl-pt:75">
						<div className="w-screen mx-auto bg-black flex items-center justify-center overflow-hidden">
							<img
								src={heroSectionContent?.desktopHeroImage?.fields?.file.url}
								alt="Team 3588 Robot"
								className="w-screen h-full object-cover fixed top-0 left-0 z-0"
							/>
							<div className="absolute left-1/2 top-[79%] -translate-x-1/2 -translate-y-1/2 text-center">
								<p className="text-2xl uppercase md:text-3xl lg:text-4xl xl:text-6xl font-[TTNorms] tracking-[1rem] md:tracking-[2rem] text-center p-3 rounded-2xl pb-10" style={{
									...(heroSectionContent?.tagLineBackground
										? {
											backgroundImage:
												"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
										}
										: {}),
								}}>
									{heroSectionContent?.tagLine}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
