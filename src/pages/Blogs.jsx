import { createRef } from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import BlogCard from "../components/BlogCard";
import useTitle from "../hooks/useTitle";
const ref = createRef();

const Blogs = () => {
  useTitle("Blogs")
	const data = useLoaderData();

	return (
		<div className="container mx-auto my-10">
			<header className="flex w-56 rounded-xl mx-auto justify-center items-center px-4 py-2 bg-white shadow-md">
				<Pdf targetRef={ref} filename="Blogs.pdf">
					{({ toPdf }) => (
						<button
							onClick={toPdf}
							className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
							Download Blog
						</button>
					)}
				</Pdf>
			</header>

			<div
				ref={ref}
				className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-20 ">
				{data.map((blog) => (
					<BlogCard
						key={blog.id}
						title={blog.question}
						content={blog.answer}
					/>
				))}
			</div>
		</div>
	);
};

export default Blogs;
