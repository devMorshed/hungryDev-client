import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const Channel = () => {
	const channelData = useLoaderData();

	console.log(channelData);
	return (
		<div>
			{/* <div className="flex flex-col md:flex-row items-center justify-between gap-10 container bg-orange-300 w-full mx-auto">
				<div className="w-1/2 border mx-auto  relative ">
					<div className="absolute top-1/2 -left-10 border rounded w-20 text-center bg-white btn-outline flex items-center gap-2">
						<AiOutlineHeart size={20}/> {channelData.likes}
					</div>
					<img
						className="  rounded-xl border-[5px] "
						src={channelData.picture}
						alt=""
					/>
				</div>

				<div className=" w-1/2">
					<h2 className="text-3xl">{channelData.name}</h2>
					<p>{channelData.bio.slice(0, 100)}...</p>
				</div>
			</div> */}

      
		</div>
	);
};

export default Channel;
