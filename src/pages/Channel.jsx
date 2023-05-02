import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import bg from "../assets/foodbg.jpg";

const Channel = () => {
	const channelData = useLoaderData();

	console.log(channelData);
	return (
		<div>
			<div className="flex flex-col relative md:flex-row items-center justify-between gap-10 container p-10  w-full mx-auto">
				<div
					style={{
						backgroundImage: `url(https://img.freepik.com/free-photo/handrawn-barbecue-elements_125540-588.jpg?size=626&ext=jpg)`,
					}}
					className="absolute bg-repeat opacity-10 contrast-125  top-0 right-0 left-0 bottom-0 -z-10"></div>
				<div className="md:w-1/2 mx-auto ">
					<img
						className="  rounded-xl border-white border-[5px] "
						src={channelData.picture}
						alt=""
					/>
				</div>

				<div className="w-full md:w-1/2  mx-auto space-y-5">
					<h2 className="text-3xl">{channelData.name}</h2>
					<p>{channelData.bio}</p>

					<div className="flex justify-between">
						<p>
							{" "}
							<span className="font-bold"> Likes: </span>
							{channelData.likes}
						</p>
						<p>
							{" "}
							<span className="font-bold"> Recipes: </span>
							{channelData.num_recipes}
						</p>
						<p>
							{" "}
							<span className="font-bold"> Experience: </span>
							{channelData.years_of_experience} Years
						</p>
					</div>

					<div className="flex justify-center ">
						<button className="btn rounded-md btn-warning gap-2">
							Love
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="white"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth=""
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Channel;
