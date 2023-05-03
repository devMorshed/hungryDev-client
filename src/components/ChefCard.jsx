import React from "react";
import { Link } from "react-router-dom";

const ChefCard = (props) => {
	const {
		picture,
		id,
		name,
		years_of_experience,
		num_recipes,
		likes,
		bio,
		rating,
	} = props.data;
	return (
		<div className="card relative p-10 rounded-xl space-y-4">
			<div
				style={{
					backgroundImage: `url(https://i.ibb.co/x1kTB5W/orangebg.png)`,
				}}
				className="absolute bg-repeat  opacity-10 brightness-75  top-0 right-0 left-0 bottom-0 -z-10"></div>
			<h2 className="text-2xl">{name}</h2>
			<img
				className="w-full rounded-xl border"
				src={picture}
				alt={name}
			/>
			<p>
				<span className="font-bold text-lg mr-2">Experience:</span>
				{years_of_experience} years.
			</p>
			<div className="flex justify-between">
				<p>
					<span className="font-bold text-lg mr-2">Recipes:</span>
					{num_recipes}
				</p>
				<p>
					<span className="font-bold text-lg mr-2">Likes:</span>
					{likes}
				</p>
			</div>

			<Link to={`/chefs/${id}`}>
				<button className="btn rounded-md block mx-auto btn-outline ">
					View Recipes
				</button>
			</Link>
		</div>
	);
};

export default ChefCard;
