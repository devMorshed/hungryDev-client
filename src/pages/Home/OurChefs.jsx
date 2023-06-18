import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import ChefCard from '../../components/ChefCard';

const OurChefs = ({chefs = []}) => {
  return (
		<section className=" container mx-auto py-10 p-4 my-10">
			<SectionHeading t1={"Our"} t2={"Chefs"} />

			<div className="grid md:grid-cols-2 lg:grid-cols-3  my-4 gap-8">
				{chefs.map((chef) => (
					<ChefCard key={chef.id} data={chef} />
				))}
			</div>
		</section>
  );
};

export default OurChefs;