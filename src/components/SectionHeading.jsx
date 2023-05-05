import React from "react";

const SectionHeading = ({ t1, t2 }) => {
	return (
		<div className="py-4">
			<h2 className="text-4xl lg:text-5xl font-bold text-center transform -rotate-2">
				<span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2 clip-text rounded mr-2">
					{t1}
				</span>
				<span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
					{t2}
				</span>
			</h2>
		</div>
	);
};

export default SectionHeading;
