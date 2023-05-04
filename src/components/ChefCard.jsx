import React from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import AbsoluteBG from "./AbsoluteBG";

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
    <div className="card shadow-md relative p-6 gap-3 rounded-xl ">
      
			<AbsoluteBG src={"https://i.ibb.co/x1kTB5W/orangebg.png"} style={'opacity-20 grayscale brightness-50'} />
			<h2 className="text-2xl text-gray-800 font-semibold">{name}</h2>
			<img
				className=" rounded-xl border-2 border-white shadow-lg"
				src={picture}
				alt={name}
			/>
			<Stats
				likes={likes}
				recipes={num_recipes}
				experience={years_of_experience}
			/>
			<Link to={`/chefs/${id}`}>
				<button className="btn rounded-md block mx-auto btn-outline hover:btn-warning ">
					View Recipes
				</button>
			</Link>
		</div>
	);
};

export default ChefCard;
