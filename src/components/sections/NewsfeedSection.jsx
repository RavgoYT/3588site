import React from "react";
import SliderDots from "../ui/SliderDots";
import GradientFrame from "../ui/GradientFrame";
import GradientImageFrame from "../ui/GradientImageFrame";
import ContentCarousel from "../ui/carousel/ImageCarousel";

const NewsfeedSection = () => {
	return (
		<section id="newsfeed" className="py-0 bg-black h-full">
			<div className="container mx-auto px-8">
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
				{/* News Image Slider */}
				{/* <div className="max-w-2xl mx-auto">
					
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn}
						className="mb-8"
					>
            <GradientImageFrame src={"https://picsum.photos/672/368"} alt="News Image" />
						<SliderDots count={5} active={0} />
					</motion.div>

					<div className="bg-black/50 p-4 rounded">
						<p className="mb-4 italic">
							Lindbergh students recently attended the Seattle FanExpo to
							present their robot and let the community learn about how it
							works. Click the screen for our media gallery of the event!
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="bg-blue-900 px-2 py-1 text-xs rounded-md font-mono">
								TAGS
							</span>
							<span className="bg-purple-900 px-2 py-1 text-xs rounded-md font-mono">
								ON INSTAGRAM
							</span>
							<span className="bg-team-red-900 px-2 py-1 text-xs rounded-md font-mono">
								SUMMER EVENT
							</span>
						</div>
					</div>
				</div> 
        */}
			</div>
		</section>
	);
};

export default NewsfeedSection;
