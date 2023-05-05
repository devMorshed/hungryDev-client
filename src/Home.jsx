import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ChefCard from "./components/ChefCard";
import SectionHeading from "./components/SectionHeading";
import QoutesCarousel from "./components/QoutesCarousel";
import AbsoluteBG from "./components/AbsoluteBG";
import useTitle from "./hooks/useTitle";

const Home = () => {
	useTitle("Home");

	const chefs = useLoaderData();
	return (
		<div className="">
			<section className="container relative  mx-auto my-4 p-4  lg:p-10 rounded-xl">
				<div className=" md:p-10  max-h-[calc(100vh-200px)] gap-10 flex flex-col md:flex-row justify-center items-center ">
					<AbsoluteBG
						src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
						style={"opacity-20 brightness-50"}
					/>

					<div className="md:w-1/2">
						<div className=" text-4xl lg:text-5xl text-center space-y-4 mx-auto uppercase font-black">
							<p>Welcome to</p>
							<div className="animate-bounce">
								<SectionHeading t1={"Hungry"} t2={"Dev"} />
							</div>
						</div>
						<button className="mt-8 px-6 py-3 block mx-auto bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-bold">
							Explore now
						</button>
					</div>

					<div className="flex-grow">
						<img
							className="border-2 rounded-xl"
							src={"https://i.ibb.co/Lzn8Kcs/foodbg.jpg"}
							alt=""
						/>
					</div>
					{/* <Banner/> */}
				</div>
			</section>
			<section className=" container mx-auto py-10 p-4 my-10">
				<SectionHeading t1={"Our"} t2={"Chefs"} />

				<div className="grid md:grid-cols-2 lg:grid-cols-3  my-4 gap-8">
					{chefs.map((chef) => (
						<ChefCard key={chef.id} data={chef} />
					))}
				</div>
			</section>
			<section className="container mx-auto py-10 p-4 my-10 ">
				<SectionHeading t1={"Chefs"} t2={"Qoutes"} />

				<div className=" gap-10 flex flex-col md:flex-row justify-center items-center ">
					<QoutesCarousel />
				</div>
			</section>

			<section className="container relative rounded-xl  mx-auto my-10 md:p-10 p-4 ">
				<AbsoluteBG
					src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
					style={"brightness-50 opacity-10"}
				/>

				<div className=" flex flex-col gap-10 md:flex-row justify-between items-center">
					<div className="md:w-1/2">
						<img
							className="rounded "
							src="https://i.ibb.co/QQCCXkm/help.jpg"
							alt=""
						/>
					</div>
					<div className="md:w-1/2">
						<div className=" rounded">
							<div className="mx-auto lg:p-20">
								<div className="animate-bounce ">
									<SectionHeading t1={"Lets"} t2={"Talk!"} />
								</div>

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
