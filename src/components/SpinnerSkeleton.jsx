import React from "react";
import { FaSpinner } from "react-icons/fa";

const SkeletonLoader = () => {
	return (
		<div className="flex h-[calc(100vh-200px)] flex-col justify-center items-center">
			<div className="flex items-center justify-center w-full h-full">
				<FaSpinner size={250} className="animate-spin text-gray-200" />
			</div>
		</div>
	);
};

export default SkeletonLoader;
