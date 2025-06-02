import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SliderDots from "../SliderDots";
import GradientImageFrame from "../GradientImageFrame";
import GradientArrows from "../GradientArrows";
import rawSlidesData from "../../../assets/carouselData.json";
import { shuffle } from "txt-shuffle";

// Animation variants for tags only
const tagVariants = {
	initial: { opacity: 0, scale: 0 },
	animate: (i) => ({
		opacity: 1,
		scale: 1,
		transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 15 },
	}),
	exit: { opacity: 0, scale: 0.4 },
};

// Custom component to handle text shuffling
const TextShuffle = ({ text, className, style, duration, animation, direction, glyphs, delay }) => {
  const [displayText, setDisplayText] = useState(text);
  const cancelRef = React.useRef(null);

  useEffect(() => {
    // Cancel any ongoing shuffle before starting a new one
    if (cancelRef.current) {
      cancelRef.current();
      cancelRef.current = null;
    }
    // Reset displayText only *after* cancelling previous shuffle
    setDisplayText("");

    const cancel = shuffle({
      text,
      duration,
      fps: 60,
      glyphs: glyphs || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/~`",
      animation,
      direction,
      delayResolve: delay || 0,
      onUpdate: (output) => setDisplayText(output),
    });

    cancelRef.current = cancel;

    // Cleanup on unmount or before next effect run
    return () => {
      if (cancelRef.current) {
        cancelRef.current();
        cancelRef.current = null;
      }
    };
  }, [text, duration, animation, direction, glyphs, delay]);

  return (
    <span className={className} style={style}>
      {displayText}
    </span>
  );
};


const ContentCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState(null);

	const slides = rawSlidesData.slides ?? [];

	const goToSlide = (index) => {
		if (swiperInstance) {
			swiperInstance.slideTo(index);
			swiperInstance.autoplay.stop();
			setTimeout(() => swiperInstance.autoplay.start(), 10000);
		}
	};

	const nextSlide = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();
			swiperInstance.autoplay.stop();
			setTimeout(() => swiperInstance.autoplay.start(), 10000);
		}
	};

	const prevSlide = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();
			swiperInstance.autoplay.stop();
			setTimeout(() => swiperInstance.autoplay.start(), 10000);
		}
	};

	const getTagColor = (tag, index) => {
		const colors = [
			"bg-[#6687c8] text-white",
			"bg-[#e23942] text-white",
			"bg-[#cb6ce6] text-white",
			"bg-[#B8D5B8] text-black",
			"bg-[#D7B49E] text-black",
			"bg-[#FFD3DA] text-black",
			"bg-[#FDFCDC] text-black",
			"bg-[#c8c866] text-black",
			"bg-[#a875f7] text-white",
			"bg-[#5a9f88] text-white",
		];
		return colors[index % colors.length];
	};

	if (slides.length === 0) return null;

	return (
		<div className="w-full bg-black text-white flex justify-center items-center py-8">
			<div className="w-full max-w-7xl mx-auto px-4 mr-13">
				<div className="flex flex-col md:flex-row gap-10 items-center md:items-center">
					<div className="flex-shrink-0 relative">
						<GradientImageFrame>
							<div className="relative">
								<Swiper
									modules={[Autoplay]}
									spaceBetween={0}
									slidesPerView={1}
									autoplay={{ delay: 5000, disableOnInteraction: false }}
									onSwiper={setSwiperInstance}
									onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
									className="w-[560px] h-[315px]"
									effect="slide"
									speed={500}
									loop={true}
								>
									{slides.map((slide, index) => (
										<SwiperSlide key={index}>
											<img
												src={slide.image}
												alt={slide.imageAlt || slide.title}
												className="w-full h-full object-cover"
											/>
										</SwiperSlide>
									))}
								</Swiper>

								<GradientArrows
									onPrev={() => {
										if (swiperInstance) {
											if (currentSlide === 0) {
												swiperInstance.slideTo(slides.length - 1);
											} else {
												swiperInstance.slidePrev();
											}
											swiperInstance.autoplay.stop();
											setTimeout(() => swiperInstance.autoplay.start(), 10000);
										}
									}}
									onNext={() => {
										if (swiperInstance) {
											if (currentSlide === slides.length - 1) {
												swiperInstance.slideTo(0);
											} else {
												swiperInstance.slideNext();
											}
											swiperInstance.autoplay.stop();
											setTimeout(() => swiperInstance.autoplay.start(), 10000);
										}
									}}
									prevClassName="prev-arrow"
									nextClassName="next-arrow"
								/>
							</div>
						</GradientImageFrame>

						<SliderDots
							count={slides.length}
							active={currentSlide}
							onDotClick={goToSlide}
						/>
					</div>

					<div
						className="flex-1 text-white space-y-6 mt-[-20px]"
						style={{ fontFamily: "HK Modular" }}
					>
						{/* No motion here, just TextShuffle */}
						<h3 className="text-4xl font-bold uppercase tracking-wide">
							<TextShuffle
								text={slides[currentSlide].title}
								style={{ fontFamily: "HK Modular" }}
								duration={1}
								animation="stay"
								direction="random"
								glyphs="3588"
							/>
						</h3>

						<p
							className="text-gray-300 leading-relaxed text-xl max-w-2xl"
							style={{ fontFamily: "TTNorms" }}
						>
							<TextShuffle
								text={slides[currentSlide].description}
								style={{ fontFamily: "TTNorms" }}
								duration={Math.min(
									4,
									0.3462 + 0.01923 * (slides[currentSlide].description?.length || 0)
								)}
								animation="stay"
								direction="right"
								glyphs="_"
								delay={0}
							/>
						</p>

						<div className="space-y-3">
							<div className="text-sm font-bold uppercase tracking-wider text-white">
								<TextShuffle text="TAGS" style={{ fontFamily: "HK Modular" }} />
							</div>
							<div className="flex flex-wrap gap-3">
								{Object.entries(slides[currentSlide])
									.filter(([key, value]) => key.startsWith("tag") && value)
									.map(([key, tag], index) => (
										<motion.span
											key={`${currentSlide}-${index}`}
											custom={index}
											variants={tagVariants}
											initial="initial"
											animate="animate"
											exit="exit"
											className={`px-4 py-2 text-sm font-bold uppercase rounded-lg ${getTagColor(
												tag,
												index
											)}`}
											style={{ fontFamily: "HK Modular" }}
										>
											<TextShuffle
												text={tag}
												style={{ fontFamily: "HK Modular" }}
												duration={1.5}
												animation="stay"
												direction="random"
												glyphs="###"
												delay="0.3"
											/>
										</motion.span>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCarousel;
