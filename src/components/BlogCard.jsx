import React from 'react';

const BlogCard = ({ title, content }) => {
	return (
		<div className="p-6 relative shadow-lg rounded-md">
			<div
				style={{
					backgroundImage: `url(https://img.freepik.com/free-photo/handrawn-barbecue-elements_125540-588.jpg?size=626&ext=jpg)`,
				}}
				className="absolute bg-repeat opacity-10 contrast-125  top-0 right-0 left-0 bottom-0 -z-10"></div>
			<h2 className="text-2xl font-bold mb-2">{title}</h2>
			<p className="text-gray-600">{content}</p>
		</div>
	);
};

export default BlogCard;