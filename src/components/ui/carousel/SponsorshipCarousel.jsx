import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animations";
import SliderDots from "./SliderDots";
import GradientArrows from "./GradientArrows";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SponsorshipCarousel = ({levelData, setShowModal, setActiveLevelData}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState(null);

	return (
		<div className="flex flex-col items-center w-full mb-5 bg-black">
			<Swiper
        slidesPerView={1}
				spaceBetween={60}
				centeredSlides={true}
				modules={[Pagination]}
				onSwiper={setSwiperInstance}
				onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
				className="mySwiper w-[50vw]"
			>
				{levelData.map((level, index) => (
					<SwiperSlide key={index}>
						<motion.div
							key={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="flex flex-col items-center justify-center w-full aspect-square cursor-pointer"
							onClick={() => {
								setActiveLevelData(level);
								setShowModal(true);
							}}
						>
							<div
								className="relative rounded-xl p-2  aspect-square flex items-center justify-center mb-4 overflow-hidden"
								style={{
									backgroundImage:
										"linear-gradient(to right, var(--color-navy-blue), var(--color-poppy))",
								}}
							>
								<img
									src={level.image.fields.file.url}
									alt={`${level.name} Sponsorship Level`}
									className="w-full h-full object-cover aspect-square"
								/>
								
							</div>
							<h3 className="text-2xl font-display font-bold text-center">{level.name}</h3>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderDots
				count={levelData.length}
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
