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
		<div className="card p-10 rounded-xl bg-slate-300 space-y-4">
			<h2 className="text-3xl">{name}</h2>
			<img
				className="w-full rounded-xl border"
				src={picture}
				alt={name}
			/>
			<p>
				<span className="font-bold text-xl mr-2">Experience:</span>
				{years_of_experience} years.
			</p>
			<div className="flex justify-between">
				<p>
					<span className="font-bold text-xl mr-2">Recipes:</span>
					{num_recipes}
				</p>
				<p>
					<span className="font-bold text-xl mr-2">Likes:</span>
					{likes}
				</p>
			</div>

			<Link to={`/chefs/${id}`}>
				<button className="btn rounded-xl block mx-auto btn-outline ">
					View Recipes
				</button>
			</Link>
		</div>
	);
};

export default ChefCard;
