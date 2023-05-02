import { Outlet, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChefCard from "./components/ChefCard";
import bg from './assets/foodbg.jpg'

const Home = () => {
	const chefs = useLoaderData();

	return (
		<div>
			<section className="my-10  p-10 bg-orange-300 rounded-xl">
				<div className="container h-[calc(100vh-200px)] mx-auto  gap-10 flex flex-col md:flex-row justify-center items-center ">
					<div className="md:w-1/2">
						<h3 className=" text-4xl md:text-6xl text-center ">
							Welcome to the domain of Hungry Dev
						</h3>
					</div>
					<div className="flex-grow">
						<img className="border-2 rounded-xl" src={bg} alt="" />
					</div>
				</div>
			</section>
			<section className="my-10 p-10">
				<div className="container mx-auto">
					<h3 className="text-3xl text-center">Meet Our Chefs</h3>
					<div>
						<div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-8">
							{chefs.map((chef) => (
								<ChefCard key={chef.id} data={chef} />
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
