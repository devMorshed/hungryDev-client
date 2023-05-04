import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper";
import AbsoluteBG from "./AbsoluteBG";

export default function QoutesCarousel() {
	const [_, setInit] = useState();
	const [activeIndex, setActiveIndex] = useState(0);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const slideData = {
		slides: [
			{
				id: 1,
				imgLink: "https://i.ibb.co/rMpPtnv/chef6.jpg",
				homeData: {
					title: "michael-strahan",
					text: " If you're not the one cooking, then stay put and compliment the chef.",
					bgImg: "https://i.ibb.co/MffPfdk/foodbg1.jpg",
				},
			},
			{
				id: 2,
				imgLink: "https://i.ibb.co/ZzkrRLm/chef5.jpg",
				homeData: {
					title: "Tom Colicchio",
					text: "'Chef' doesn't mean that you're the best cook, it simply means 'boss",
					bgImg: "https://i.ibb.co/fkDFwzC/foodbg2.jpg",
				},
			},
			{
				id: 3,
				imgLink: "https://i.ibb.co/x6Z7Tz2/chef4.jpg",
				homeData: {
					title: "Ranveer Brar",
					text: "If you're a happy person around food, you can be a professional chef.",
					bgImg: "https://i.ibb.co/Gkdr0Rm/foodbg3.jpg",
				},
			},
		],
	};

	const handleOnSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	return (
    <div className=" relative w-full my-6">
      
      
			

      <AbsoluteBG src={slideData.slides[activeIndex]?.homeData.bgImg} style={'brightness-50 bg-cover'}  />


			<div className="rounded-xl w-full h-full flex flex-col md:flex-row items-center gap-10 justify-center p-10 bg-cover bg-center bg-no-repeat ">
				<div className="lg:p-20 space-y-6">
					<h2 className=" text-center text-lg  brig md:text-2xl lg:text-4xl text-white font-mono">
						{slideData.slides[activeIndex]?.homeData.text}
					</h2>
					<p className="italic text-center text-xl text-orange-500">
						-{slideData.slides[activeIndex]?.homeData.title}
					</p>
				</div>

				<div className=" md:w-1/2 w-full text-center md:h-auto mx-auto ">
					<Swiper
						onInit={() => setInit(true)}
						onSlideChange={handleOnSlideChange}
						effect={"coverflow"}
						grabCursor={true}
						spaceBetween={20}
						centeredSlides={true}
						autoplay={true}
						slidesPerView={2}
						coverflowEffect={{
							rotate: 20,
							stretch: 10,
							depth: 80,
							modifier: 1.5,
							slideShadows: false,
						}}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
							clickable: true,
						}}
						modules={[EffectCoverflow, Navigation]}
						className="swiper_container md:h-1/2">
						{slideData.slides.map((slide) => (
							<SwiperSlide key={slide.id}>
								{({ isActive }) => (
									<div>
										<img
											className={
												isActive
													? `rounded-3xl border-2 border-orange-300`
													: undefined
											}
											src={slide.imgLink}
											alt={slide.homeData.title}
										/>
									</div>
								)}
							</SwiperSlide>
						))}
					</Swiper>
					<div className=" block md:absolute slider-controler m-0 lg:my-4 text-white">
						<button ref={prevRef}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-10 h-10">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</button>
						<button ref={nextRef}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-10 h-10">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
