import React from 'react';
import { SiCodechef } from "react-icons/si";
import { MdWorkHistory } from "react-icons/md";
import { FcLike } from "react-icons/fc";



const Stats = ({ likes, recipes, experience }) => {
	return (
		<div className="flex items-center my-4 justify-between">
			<div className="flex gap-1 items-center">
				<FcLike color="red" size={40} /> <p> {likes} </p>
			</div>
			<div className="flex gap-1 items-center justify-around">
				<SiCodechef color="red" size={40} /> <p>{recipes} Items.</p>
			</div>
			<div className="flex  gap-1 items-center justify-around">
				<MdWorkHistory color="red" size={40} />{" "}
				<p>{experience} Years.</p>
			</div>
		</div>
	);
};


export default Stats;