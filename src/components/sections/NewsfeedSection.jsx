import React, { useState, useEffect } from "react";
import PixelBlast from "../ui/backgrounds/PixelBlast";
import ContentCarousel from "../ui/carousel/ImageCarousel";


const NewsfeedSection = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Tailwind md breakpoint is 768px

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<section id="newsfeed" className="py-0 bg-black h-full relative overflow-hidden">
			{!isMobile && (<div className="absolute inset-0 -z-0" key="persistent-background">
				<PixelBlast variant="square"
					pixelSize={4}
					color="#5884D5"
					patternScale={3}
					patternDensity={0.3}
					pixelSizeJitter={0}
					speed={0.5}
					edgeFade={0.25}
					transparent

				/>
			</div>)}
			<div className="relative container mx-auto px-8 z-10">
				{/* "Brought to you by" with logo */}
				<div className="flex justify-center lg:mb-14">
					<div className="flex items-center text-m text-var(--color-ghost-white)">
						<span>brought to you by</span>
						<div className="ml-2 bg-gray-800 px-3 py-1 flex items-center">
							<div className="w-6 h-6 bg-gray-700 mr-2 flex items-center justify-center">
								{/* temporarily using text here to simulate what it would look like. Need an SVG of it. */}
								<span className="text-xs font-mono">LOGO</span>
							</div>
							<span className="font-mono">LBB Logo</span>
						</div>
					</div>
				</div>
				<ContentCarousel />

			</div>
		</section>
	);
};

export default NewsfeedSection;
