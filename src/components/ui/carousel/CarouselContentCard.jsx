import React from "react";
import GradientFrame from "../GradientFrame";
import { SwiperSlide } from "swiper/react";

const CarouselContentCard = ({
	imageSrc,
	imageAlt,
	title,
	description,
	tag1,
	tag2,
	tag3,
}) => {
	console.log("Card title: " + title);
	return (
		<SwiperSlide>
			<div
				className="max-w-sm rounded overflow-hidden shadow-lg p-3"
				style={{
					backgroundImage:
						"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
				}}
			>
				<img className="w-full rounded-t" src={imageSrc} alt={imageAlt} />
				<div className="bg-gray-900 rounded-b">
					<div className="px-6 py-4">
						<div className="font-bold text-2xl mb-2">{title}</div>
						<p className="text-base">{description}</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-gray-950 text-sm font-semibold mr-2 mb-2">
							{tag1}
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-gray-950 text-sm font-semibold mr-2 mb-2">
							{tag2}
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-gray-950 text-sm font-semibold mr-2 mb-2">
							{tag3}
						</span>
					</div>
				</div>
			</div>
		</SwiperSlide>
	);
};

export default CarouselContentCard;
