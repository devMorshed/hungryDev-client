import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import bg from "../assets/foodbg.jpg";
import { Rating } from "@smastrom/react-rating";
import LazyLoad from "react-lazy-load";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import Stats from "../components/Stats";
import AbsoluteBG from "../components/AbsoluteBG";
import useTitle from "../hooks/useTitle";

const Channel = () => {
  useTitle("Channel");

	const {
		picture,
		name,
		bio,
		recipes,
		years_of_experience,
		likes,
		num_recipes,
	} = useLoaderData();
	const [clicked, setClicked] = useState([]);

	return (
		<>
			<section className="p-4">
				<div className="flex flex-col relative md:flex-row items-center justify-between gap-10 container p-10  w-full mx-auto">
					<AbsoluteBG
						src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
						style={"opacity-10"}
					/>
					<div className="md:w-1/2 mx-auto ">
						<LazyLoad
							height={"100%"}
							width="100%"
							offset={500}
							threshold={0.5}>
							<img
								className="rounded-xl border-white border-[5px] "
								src={picture}
								alt=""
							/>
						</LazyLoad>
					</div>

					<div className="w-full md:w-1/2  mx-auto space-y-5">
						<h2 className="text-3xl">{name}</h2>
						<p>{bio}</p>

						<Stats
							likes={likes}
							recipes={num_recipes}
							experience={years_of_experience}
						/>
					</div>
				</div>
			</section>

			<section className="container my-10 py-10 mx-auto p-4 ">
				<div className="flex flex-col xl:flex-row items-center justify-between gap-10">
					{recipes.map((recipe) => (
						<div
							className=" border shadow-lg min-h-[650px]  relative xl:w-[800px] lg:w-[750px] md:w-[650px] sm:w-[550px]  flex flex-col justify-center space-y-4 p-4 rounded-xl"
							key={recipe.id}>
							<AbsoluteBG
								src={"https://i.ibb.co/6Df7gT0/lbg.png"}
								style={"opacity-10"}
							/>
							<h3 className=" rounded-md text-center text-2xl glass w-1/3 mx-auto font-medium">
								{recipe.name}
							</h3>
							<div>
								<h4 className="text-center my-2">
									Ingredients
								</h4>
								<ul className="list-disc grid grid-cols-2 text-xs   marker:text-red-500 marker:text-2xl list-inside">
									{recipe.ingredients.map((i, index) => (
										<li key={index} className="">
											{i}
										</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="text-center my-2">
									Cooking Method:
								</h4>
								<ul className="list-inside text-xs">
									{recipe?.method?.map((i, idx) => (
										<li key={idx}>{i}</li>
									))}
								</ul>
							</div>

							<div className="flex justify-around items-center">
								<div className="flex gap-2">
									Rating:
									<Rating
										style={{ maxWidth: 100 }}
										value={recipe.rating}
										readOnly
									/>
								</div>

								<button
									onClick={() => {
										toast(`${recipe.name} loved! `);
										setClicked([recipe.id, ...clicked]);
									}}
									className={
										clicked.includes(recipe.id)
											? "btn rounded-md btn-warning gap-2 btn-disabled"
											: "btn rounded-md btn-warning gap-2"
									}>
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
					))}
				</div>
			</section>
		</>
	);
};

export default Channel;
