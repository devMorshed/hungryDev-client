import AbsoluteBG from '../../components/AbsoluteBG';
import SectionHeading from '../../components/SectionHeading';

const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;