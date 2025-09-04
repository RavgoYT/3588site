//Footer

import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-12 bg-black text-white border-t border-gray-800">
			<div className="container mx-auto px-8">
				{/* <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <p className=" mb-4 md:mb-0 font-sans">Stay informed on team news and updates.</p>
            <div className="flex w-full md:w-auto md:max-w-md">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="border border-gray-700 bg-gray-900 px-4 py-2 rounded-l-md flex-grow text-white"
              />
              <button className="bg-blue-900 px-4 py-2 rounded-r-md hover:bg-blue-800 transition font-mono">
                →
              </button>
            </div>
          </div>
        </div> */}

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					<div>
						<h3 className="font-display font-medium mb-4">Discover</h3>
						<ul className="space-y-2">
							<li>
								<a href="#about" className=" hover:text-white transition">
									Team
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									Gallery
								</a>
							</li>
							<li>
								<a href="#newsfeed" className=" hover:text-white transition">
									What's new
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-display font-medium mb-4">Resources</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className=" hover:text-white transition">
									CAD
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									Support
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									News Channel
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									Whatever
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									Here
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-display font-medium mb-4">Links</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="https://www.youtube.com/@lindberghrobotics"
									className=" hover:text-white transition"
								>
									YouTube
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/lhseagles_robotics?utm_source=ig_web_button_share_sheet&igsh=dnJkcHJqenI1bWxt"
									className=" hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a href="https://discord.gg/TwDt5ucMvv" className=" hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer">
									Discord
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-display font-medium mb-4">FIRST Resources</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="https://www.firstinspires.org/robotics/frc"
									className=" hover:text-white transition"
									target="_blank"
									rel="noopener noreferrer"
								>
									FIRST Website
								</a>
							</li>
							<li>
								<a
									href="https://firstfrc.blob.core.windows.net/frc2025/Manual/2025GameManual.pdf"
									className=" hover:text-white transition"
									target="_blank"
									rel="noopener noreferrer"
								>
									Game Manual
								</a>
							</li>
							<li>
								<a href="#" className=" hover:text-white transition">
									Technical Resources
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center mb-4 md:mb-0">
							<h2 className="text-xl font-display font-medium mr-2">
								The Talon
							</h2>
							<span className="text-sm text-gray-500 font-ttnorms">
								Made w/❤️ by Outreach of Team 3588 in Lindbergh, WA.
							</span>
						</div>
						<div>
							<p className="text-sm text-gray-500 font-ttnorms">
								Copyright © 2025 The Talon. All rights reserved.
							</p>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
	);
}
