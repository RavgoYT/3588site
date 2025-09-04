import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";

const ContactSection = () => {
	return (
		<section id="contact" className="pb-5 bg-black">
			<div className="container mx-auto px-8 text-center flex flex-col md:flex-row justify-center gap-8">
				<a
					href="mailto:projectmanager@lindberghrobotics.org"
					target="_blank"
					rel="noopener noreferrer"
					className="md:min-w-[200px] mt-6 inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style={{
						background: "linear-gradient(90deg, #6586c7, #e23942)",
						letterSpacing: "0.1em",
					}}
				>
					<div className="flex flex-row justify-center gap-3">
						<Mail />
						EMAIL
					</div>
				</a>
        <a
					href="https://www.instagram.com/lhseagles_robotics?utm_source=ig_web_button_share_sheet&igsh=dnJkcHJqenI1bWxt"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-6 inline-block md:min-w-[200px] px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style={{
						background: "linear-gradient(90deg, #6586c7, #e23942)",
						letterSpacing: "0.1em",
					}}
				>
					<div className="flex flex-row gap-3 justify-center">
						<Instagram />
						Instagram
					</div>
				</a>
			</div>
		</section>
	);
};

export default ContactSection;
