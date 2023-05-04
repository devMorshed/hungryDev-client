import SectionHeading from "../components/SectionHeading";
import AbsoluteBG from "../components/AbsoluteBG";
import { SiCodechef } from "react-icons/si";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
	const data = useLoaderData();

	const { instructor, features, packages } = data;
	console.log(features);

	return (
		<div className="container my-10 mx-auto">
			<div className="bg-gradient-to-b from-indigo-500  rounded-md   to-orange-600 p-10">
				<div className="my-2">
					<SectionHeading t1={"About"} t2={"Us"} />
				</div>

				<p className="text-lg w-10/12 mx-auto md:text-xl text-white mb-8">
					This is an online video platform based cooking course
					directed by the most experienced chef. This courses offer a
					wide variety of features to help you improve your culinary
					skills, from beginner to advanced.
				</p>
			</div>

			<div className="card shadow-md relative p-6 gap-3 rounded-xl my-10 ">
				<AbsoluteBG
					src={"https://i.ibb.co/x1kTB5W/orangebg.png"}
					style={"opacity-20 grayscale brightness-50"}
				/>

				<div className="flex flex-col md:flex-row justify-center items-center lg:px-20">
					<img
						className=" m-10 rounded-xl w-1/2 border-2 border-white shadow-lg"
						src={instructor.img1}
						alt={instructor.name}
					/>
					<div>
						<div className="text-2xl flex justify-center items-center  w-1/2 mx-auto text-gray-800 font-semibold">
							<p className="">
								<SiCodechef size={100} color="orangered" />
							</p>
							<h2>{instructor.name}</h2>
						</div>

						<div className="flex flex-col p-4 justify-around gap-4 my-4 items-center">
							<p>{instructor.bio}</p>
						</div>
					</div>
				</div>
			</div>

			<section className=" container mx-auto my-10">
				<div className="">
					<div className="my-3">
						<SectionHeading t1={"Features"} t2={""} />
					</div>

					<div className="bg-gray-800 p-10 rounded-xl flex flex-col md:flex-row gap-10">
						{features.map((feature) => (
							<div className="" key={feature.id}>
								<p className="text-orange-400 my-2 font-semibold tracking-tight">
									{feature.title}
								</p>
								<p className="text-zinc-400">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className=" container mx-auto my-10">
				<div className="relative lg:my-4 p-10">
					<AbsoluteBG
						src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
						style={"opacity-10 brightness-100"}
					/>

					<div className="">
						<SectionHeading t1={"Course"} t2={"Package"} />
					</div>

					<div className="py-3 rounded-xl grid lg:grid-cols-3 gap-10">
						{packages.map((pack) => (
							<div
								className="relative shadow-lg p-4"
								key={pack.id}>
								<AbsoluteBG
									src={"https://i.ibb.co/6PfZnJf/darkbg.jpg"}
									style={"opacity-20 brightness-50"}
								/>

								<p className="btn glass transform -rotate-6 shadow-md rounded-md text-orange-600 text-2xl tracking-wider">
									{pack.price}
								</p>
								<p className="my-3 font-semibold text-xl tracking-tight">
									{pack.title}
								</p>
								<p className="">{pack.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;

/*

{isLoading ? (
						<div className="w-full flex items-center justify-center">
							<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
						</div>
          ) : (<div>
              
              {
                
              }
          </div> )}
(
						instructors.map((instructor) => (
							<div
								key={instructor.id}
								className="bg-white rounded-lg shadow-lg p-6">
								<img
									src={instructor.image}
									alt={`${instructor.name}`}
									className="mx-auto h-24 w-24 rounded-full mb-4"
								/>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">
									{instructor.name}
								</h3>
								<p className="text-gray-700 mb-4">
									{instructor.bio}
								</p>
								<div className="flex items-center">
									<FaUser className="text-gray-900 mr-2" />
									<span className="text-gray-700 mr-4">
										{instructor.experience} years experience
									</span>
									<FaGraduationCap className="text-gray-900 mr-2" />
									<span className="text-gray-700">
										{instructor.education}
									</span>
								</div>
								<ul className="mt-4 text-gray-700">
									{instructor.features.map((feature) => (
										<li
											key={feature.id}
											className="flex items-center">
											<FaCheck className="mr-2" />
											<span>{feature.title}</span>
										</li>
									))}
								</ul>
								<div className="mt-4">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Learn More
									</button>
								</div>
							</div>
						))
					)
*/
