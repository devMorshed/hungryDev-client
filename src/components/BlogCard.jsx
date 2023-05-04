import React from "react";
import AbsoluteBG from "./AbsoluteBG";

const BlogCard = ({ title, content }) => {
	return (
		<div className="p-6 relative shadow-lg rounded-md">
			<AbsoluteBG
				src={"https://i.ibb.co/6Df7gT0/lbg.png"}
				style={"opacity-10"}
			/>

			<h2 className="text-2xl font-bold mb-2">{title}</h2>
			<p className="text-gray-600">{content}</p>
		</div>
	);
};

export default BlogCard;
