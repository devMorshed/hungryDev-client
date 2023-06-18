import React from 'react';
import QoutesCarousel from '../../components/QoutesCarousel';
import SectionHeading from '../../components/SectionHeading';

const CustomerReview = () => {
  return (
		<section className="container mx-auto py-10 p-4 my-10 ">
			<SectionHeading t1={"Customers"} t2={"Reviews"} />

			<div className=" gap-10 flex flex-col md:flex-row justify-center items-center ">
				<QoutesCarousel />
			</div>
		</section>
  );
};

export default CustomerReview;