import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselContentCard from "./CarouselContentCard";
import { Pagination } from "swiper/modules";
import rawSlidesData from "../../../assets/carouselData.json";

const ContentCarousel = () => {
	return (
		<>
			<Swiper
				grabCursor
				centredSlides
				spaceBetween={30}
				slidesPerView={4}
				dynamicBullets
				loop
				pagination={{
					clickable: true,
					renderBullet: (index, className) => {
						return `<span class="${className} w-4 h-4 border border-white rounded-full mx-1 ${
							className.includes("swiper-pagination-bullet-active")
								? "bg-white"
								: "bg-transparent"
						}"></span>`;
					},
				}}
				className="h-full w-full"
				modules={[Pagination]}
				breakpoints={{
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					// when window width is >= 640px
					1000: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
			>
				{rawSlidesData.slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<CarouselContentCard
							title={slide.title}
							imageSrc={slide.image}
							imageAlt={slide.imageAlt}
							description={slide.description}
							tag1={slide.tag1}
							tag2={slide.tag2}
							tag3={slide.tag3}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ContentCarousel;
