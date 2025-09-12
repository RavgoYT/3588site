import React, { useState, useEffect, lazy, Suspense } from "react";
import ContentCarousel from "../ui/carousel/ImageCarousel";
import LogoLoop from "../ui/LogoLoop";
import { contentfulClient } from "../../utils/contentful";

const PixelBlast = lazy(() => import("../ui/backgrounds/PixelBlast"));

const NewsfeedSection = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Tailwind md breakpoint is 768px
	const [newsfeedLogos, setNewsfeedLogos] = useState([]);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const fetchContent = async () => {
			("Fetching content from Contentful...");
			try {
				const entries = await contentfulClient.getAssets({
					"metadata.tags.sys.id[in]": "newsfeedLogo",
				});
				const entriesArray = entries.items.map((entry) => ({
					title: entry.fields.title,
					node: (
						<img
							src={entry.fields.file.url}
							alt={entry.fields.title}
							className="h-10 md:h-20"
						/>
					),
				}));

				setNewsfeedLogos(entriesArray);
			} catch (error) {
				console.error("Error fetching data from Contentful:", error);
				return [];
			}
		};
		fetchContent();
	}, []);

	return (
		<section
			id="newsfeed"
			className="py-0 bg-black h-full relative overflow-hidden"
		>
			{!isMobile && (
				<div className="absolute inset-0 -z-0" key="persistent-background">
					<Suspense fallback={null}>
						<PixelBlast
							variant="square"
							pixelSize={4}
							color="#5884D5"
							patternScale={3}
							patternDensity={0.3}
							pixelSizeJitter={0}
							speed={0.5}
							edgeFade={0.25}
							transparent
						/>
					</Suspense>
				</div>
			)}
			<LogoLoop
				logos={newsfeedLogos}
				speed={60}
				direction="left"
				logoHeight={48}
				gap={40}
				scaleOnHover
				fadeOut
				fadeOutColor="#000000"
				ariaLabel="Brand Logos"
			/>
			<div className="lg:relative container mx-auto px-8 z-10">
				{/* "Brought to you by" with logo */}

				<ContentCarousel />
			</div>
		</section>
	);
};

export default NewsfeedSection;
