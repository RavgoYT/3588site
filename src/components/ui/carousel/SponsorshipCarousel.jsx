import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animations";
import SliderDots from "../SliderDots";
import GradientArrows from "../GradientArrows";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SponsorshipCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState(null);
	const sponsorshipLevels = [
		"TALON HATCHLING",
		"TALON FLEDGLING",
		"TALON FULL",
	];

	return (
		<div className="flex flex-col items-center w-full mb-5 bg-black">
			<Swiper
        slidesPerView={1}
				spaceBetween={60}
				centeredSlides={true}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				onSwiper={setSwiperInstance}
				onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
				className="mySwiper aspect-square w-[65vw]"
			>
				{sponsorshipLevels.map((title, index) => (
					<SwiperSlide key={index}>
						<motion.div
							key={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="flex flex-col items-center justify-center w-full h-full"
						>
							<div
								className="relative rounded-xl w-full h-[70vh] flex items-center justify-center mb-4 overflow-hidden"
								style={{
									backgroundImage:
										"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
								}}
							>
								<img
									src={`/api/placeholder/${400 + index}/${400 + index}`}
									alt={`${title} Sponsorship Level`}
									className="w-full h-full object-cover"
								/>
								<GradientArrows
									onPrev={() => {
										if (swiperInstance) {
											swiperInstance.slidePrev();
										}
									}}
									onNext={() => {
										if (swiperInstance) {
											swiperInstance.slideNext();
										}
									}}
									prevClassName="absolute left-2 top-1/2 -translate-y-1/2 z-10 prev-arrow"
									nextClassName="absolute right-2 top-1/2 -translate-y-1/2 z-10 next-arrow"
								/>
							</div>
							<h3 className="text-2xl font-display font-bold text-white text-center">{title}</h3>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderDots
				count={sponsorshipLevels.length}
				active={currentSlide}
				onDotClick={(idx) => {
					const swiperEl = document.querySelector('.mySwiper')?.swiper;
					if (swiperEl) swiperEl.slideTo(idx);
				}}
			/>
		</div>
	);
};

export default SponsorshipCarousel;
