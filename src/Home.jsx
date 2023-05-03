import { Outlet, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ChefCard from "./components/ChefCard";
import bg from "./assets/foodbg.jpg";
import Banner from "./components/Banner";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	const chefs = useLoaderData();
	// https://i.ibb.co/pWTdFvT/doodlefooddark.jpg
	return (
		<div className="">
			<section className="my-4 relative container mx-auto rounded-xl">
				<div className=" p-10  max-h-[calc(100vh-200px)]   gap-10 flex flex-col md:flex-row justify-center items-center ">
					<div
						style={{
							backgroundImage: `url(https://thumbs.dreamstime.com/b/web-152355073.jpg)`,
						}}
						className="absolute bg-repeat opacity-10 contrast-125  top-0 right-0 left-0 bottom-0 -z-10"></div>

					<div className="md:w-1/2">
						<h3 className=" text-4xl md:text-6xl text-center ">
							Welcome to the domain of <br /> Hungry Dev
						</h3>
					</div>
					<div className="flex-grow">
						<img className="border-2 rounded-xl" src={bg} alt="" />
					</div>
					{/* <Banner/> */}
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
			<section className=" my-10 p-10">
				<h3 className="text-3xl text-center mb-8 ">
					Chef Qoutes of the Day{" "}
				</h3>
				<div className="container mx-auto  gap-10 flex flex-col md:flex-row justify-center items-center ">
					<Banner />
				</div>
			</section>
			<section className=" relative rounded-xl container mx-auto my-10 lg:p-10 p-4 ">
				<div
					style={{
						backgroundImage: `url(https://thumbs.dreamstime.com/b/web-152355073.jpg)`,
					}}
					className="absolute bg-repeat opacity-10 contrast-125  top-0 right-0 left-0 bottom-0 -z-10"></div>
				<div className=" flex flex-col gap-10 md:flex-row justify-between items-center">
					<div className="md:w-1/2">
						<img
							className="rounded "
							src="https://media.istockphoto.com/id/1160233770/photo/cutting-and-preparing-vegetables-to-share-with-friends.jpg?s=612x612&w=0&k=20&c=gnj9mCza41DgHS0JfK6LIK3b1pCF5rSCgj_0w1TjFPM="
							alt=""
						/>
					</div>
					<div className="md:w-1/2">
						<div className=" rounded">
							<div className="mx-auto lg:p-20">
								<h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
									Let's work together
								</h2>

								<form className="mt-8">
									<div className="grid grid-cols-1 gap-y-2 gap-x-8 sm:grid-cols-2">
										<div>
											<label
												htmlFor="first-name"
												className="block text-sm font-semibold leading-6 text-gray-900">
												First name
											</label>
											<div className="mt-2.5">
												<input
													type="text"
													name="first-name"
													id="first-name"
													placeholder="John"
													autoComplete="given-name"
													className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="last-name"
												className="block text-sm font-semibold leading-6 text-gray-900">
												Last name
											</label>
											<div className="mt-2.5">
												<input
													type="text"
													name="last-name"
													id="last-name"
													placeholder="Doe"
													autoComplete="family-name"
													className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>
										<div className="sm:col-span-2">
											<label
												htmlFor="email"
												className="block text-sm font-semibold leading-6 text-gray-900">
												Email
											</label>
											<div className="mt-2.5">
												<input
													id="email"
													name="email"
													type="email"
													placeholder="johndoe@example.com"
													autoComplete="email"
													className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<div className="flex justify-between text-sm leading-6">
												<label
													htmlFor="message"
													className="block text-sm font-semibold leading-6 text-gray-900">
													How can we help you?
												</label>
												<p
													id="message-description"
													className="text-gray-400">
													Max 500 characters
												</p>
											</div>
											<div className="mt-2.5">
												<textarea
													id="message"
													name="message"
													rows={2}
													aria-describedby="message-description"
													className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
													defaultValue={""}
												/>
											</div>
										</div>
									</div>
									<button
										type="submit"
										className="rounded-md bg-indigo-600 px-3.5 py-2.5 block mx-auto my-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
										Send message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
