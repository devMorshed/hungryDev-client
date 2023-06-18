import React from 'react';
import AbsoluteBG from '../../components/AbsoluteBG';
import SectionHeading from '../../components/SectionHeading';

const Banner = () => {
  return (
		<section className="container relative  mx-auto my-4 p-4  lg:p-10 rounded-xl">
			<div className=" md:p-10  max-h-[calc(100vh-200px)] gap-10 flex flex-col md:flex-row justify-center items-center ">
				<AbsoluteBG
					src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
					style={"opacity-20 brightness-50"}
				/>

				<div className="md:w-1/2">
					<div className=" text-4xl lg:text-5xl text-center space-y-4 mx-auto uppercase font-black">
						<p>Welcome to</p>
						<div className="animate-bounce">
							<SectionHeading t1={"Hungry"} t2={"Dev"} />
						</div>
					</div>
					<button className="mt-8 px-6 py-3 block mx-auto bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-bold">
						Explore now
					</button>
				</div>

				<div className="flex-grow">
					<img
						className="border-2 rounded-xl"
						src={"https://i.ibb.co/Lzn8Kcs/foodbg.jpg"}
						alt=""
					/>
				</div>
				{/* <Banner/> */}
			</div>
		</section>
  );
};

export default Banner;