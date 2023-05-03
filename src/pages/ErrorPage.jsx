import React from "react";
import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center flex-col md:flex-row h-screen items-center gap-10 p-20 bg-orange-100">
			<div className="">
				<img
					className="rounded-xl"
					src="https://i.ibb.co/hYbyJKZ/error.png"
					alt=""
				/>
			</div>
			<div className="">
				<h4 className="text-4xl font-mono text-center max-w-md">
					Opps! <br /> like Mr Corn, the page you seek is not
					available right now.
				</h4>

				<button
					onClick={() => {
            navigate(-1);
            
					}}
					className=" btn block mx-auto my-8 rounded-md btn-outline hover:btn-warning  text-black border-gray-900 ">
					Go Back{" "}
        </button>
        
			</div>
		</div>
	);
};

export default ErrorPage;
