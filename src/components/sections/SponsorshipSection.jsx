import React, { useEffect, useState } from "react";
import { fadeIn } from "../../utils/animations";
import SponsorshipCarousel from "../ui/carousel/SponsorshipCarousel";
import { contentfulClient } from "../../utils/contentful";
import { Modal, Button } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Particles from "../ui/backgrounds/Particles";
const SponsorshipSection = () => {
	const [sponsorshipLevels, setSponsorshipLevels] = useState([])
	const [showModal, setShowModal] = useState(false);
	const [activeLevelData, setActiveLevelData] = useState([]);


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
			<div className="absolute inset-0 z-0">
				<Particles
					particleColors={['#ffffff', '#ffffff']}
					particleCount={500}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={false}
					alphaParticles={true}
					disableRotation={false}
					className="h-full w-full"
				/>
			</div>
			<div className="z-10 relative">
				<Modal
					className="bg-gray-900/50"
					dialogClassName="modal-fullscreen rounded-modal"
					data-bs-theme="dark"
					show={showModal}
					backdrop={true}
					onHide={() => setShowModal(false)}
					centered
				>
					{/* BORDER */}
					<div
						className="relative rounded-xl p-[2px]"
						style={{
							background: "linear-gradient(90deg, #6586c7, #e23942)",
						}}
					>
						<div className="bg-gray-900/90 rounded-xl">
							<Modal.Header closeButton>
								<Modal.Title className="">{activeLevelData?.name}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								{documentToReactComponents(activeLevelData?.description)}
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setShowModal(false)}>
									Close
								</Button>
							</Modal.Footer>
						</div>
					</div>
				</Modal>


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
								<h3 className="text-lg font-display font-bold">{level.name}</h3>
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
