import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ChefCard from "../../components/ChefCard";
import SectionHeading from "../../components/SectionHeading";
import AbsoluteBG from "../../components/AbsoluteBG";
import useTitle from "../../hooks/useTitle";
import CustomerReview from "./CustomerReview";
import ContactUs from "./ContactUs";
import OurChefs from "./OurChefs";
import Banner from "./Banner";
import TrendingMenu from "./TrendingMenu";
import PopularMenu from "./PopularMenu";
import Tips from "./Tips";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
	useTitle("Home");

	const chefs = useLoaderData();
	return (
		<div className="">
			<Banner />
			<OurChefs chefs={chefs} />
			<TrendingMenu />
			<PopularMenu />
      <Tips />
      <PhotoGallery/>
			<CustomerReview />
			<ContactUs />
		</div>
	);
};

export default Home;
