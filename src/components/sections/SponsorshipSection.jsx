import React, { useEffect, useState, lazy, Suspense } from "react";
import { fadeIn } from "../../utils/animations";
import SponsorshipCarousel from "../ui/carousel/SponsorshipCarousel";
import { contentfulClient } from "../../utils/contentful";
import SponsorshipModal from "../ui/modal/SponsorshipModal";

const Particles = lazy(() => import("../ui/backgrounds/Particles"));

const SponsorshipSection = () => {
	const [sponsorshipLevels, setSponsorshipLevels] = useState([])
	const [showModal, setShowModal] = useState(false);
	const [activeLevelData, setActiveLevelData] = useState([]);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	useEffect(() => {
		const fetchContent = async () => {
			try {
				const entries = await contentfulClient.getEntries({
					content_type: "sponsorshipLevel",
				});
				const subteamData = entries.items.map((item) => ({
					...item.fields,
					key: item.fields.name.toLowerCase(),
				}));
				setSponsorshipLevels(subteamData);
			} catch (error) {
				console.error("Error fetching data from Contentful:", error);
				return [];
			}
		};
		fetchContent();
	}, []);

	return (
		<section id="sponsors" className="relative md:py-20">
			{!isMobile && (
				<div className="absolute inset-0 z-0">
					<Suspense fallback={null}>
						<Particles
							particleColors={['#ffffff', '#ffffff']}
							particleCount={500}
							particleSpread={10}
							speed={0.03}
							particleBaseSize={100}
							moveParticlesOnHover={false}
							alphaParticles={true}
							disableRotation={false}
							className="h-full w-full"
						/>
					</Suspense>
				</div>
			)}
			<div className="z-10 relative">
				<SponsorshipModal showModal={showModal} setShowModal={setShowModal} activeLevelData={activeLevelData} />


				<div className="container mx-auto px-8">

					{/* Horizontal sponsorship levels */}
					<div className="z-10 hidden md:flex flex-wrap justify-center gap-8 mb-8 ">
						{sponsorshipLevels.map((level, index) => (
							<div
								key={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeIn}
								className="flex flex-col items-center cursor-pointer"
								onClick={() => {
									setActiveLevelData(level);
									setShowModal(true);
								}}
							>
								<div
									className="rounded-xl w-64 h-64 flex items-center justify-center mb-4 overflow-hidden"
									style={{
										backgroundImage:
											"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
									}}
								>
									<img
										src={level.image.fields.file.url}
										alt={`${level.name} Sponsorship Level`}
										className="w-screen h-full object-cover"
									/>
								</div>
								<h3 className="text-2xl font-display font-bold">{level.name}</h3>
							</div>
						))}
					</div>
					<div className="z-10 md:hidden">
						<SponsorshipCarousel levelData={sponsorshipLevels} setShowModal={setShowModal} setActiveLevelData={setActiveLevelData} />
					</div>

					<div className="text-center max-w-3xl mx-auto z-10">
						<p className="mb-4">
							Passion can only get us so far, as while FIRST does provide us with
							some assistance, we still need additional funds to buy robot
							components and food to feed students. Sponsorships can drastically
							supplement this issue as it not only gives us a financial resource,
							but sponsorships are a huge morale booster for our students, who can
							see that members of their community believe in their mission.
						</p>
						<p>
							Please take a look at the 3 preset sponsorship deals that we offer
							on our website by clicking on each badge respectively. For further
							inquiries, please email us.
						</p>
					</div>
				</div>
			</div >
		</section >
	);
};
//

export default SponsorshipSection;
