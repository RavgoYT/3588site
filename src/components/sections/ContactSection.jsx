import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";
import GradientButton from "../ui/GradientButton";

const ContactSection = () => {
	return (
		<section id="contact" className="pb-5 bg-black">
			<div className="container mx-auto px-8 text-center flex flex-col md:flex-row justify-center gap-8">
				<GradientButton href="mailto:projectmanager@lindberghrobotics.org">
					<div className="flex flex-row justify-center gap-3  text-white">
						<Mail />
						EMAIL
					</div>
				</GradientButton>
				<GradientButton href="https://www.instagram.com/lhseagles_robotics?utm_source=ig_web_button_share_sheet&igsh=dnJkcHJqenI1bWxt">
					<div className="flex flex-row gap-3 justify-center text-white align-center">
						<Instagram />
						Instagram
					</div>
				</GradientButton>
			</div>
		</section>
	);
};

export default ContactSection;
