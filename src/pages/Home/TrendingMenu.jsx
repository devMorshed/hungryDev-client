import SectionHeading from "../../components/SectionHeading";

const TrendingMenu = () => {
  const topMenus = [
    {
      id: 1,
      img: "https://i.ibb.co/g7Cq2Wv/biriyani.jpg",
      name: "Biriyani",
      description: "Biriyani is a great food based on rice and meat",
    },
    {
      id: 2,
      img: " https://i.ibb.co/xFyz6SM/noodles.jpg",
      name: "Noodles",
      description:
        "Noodles is a great food based on noodle made with rice flour and dipped within soup",
    },
    {
      id: 3,
      img: " https://i.ibb.co/qp0kPCv/swarma.jpg",
      name: "Swarma",
      description:
        "Swarma is a much tasty food wraped by thin round shaped rice based cover and filled with meat ",
    },
    {
      id: 4,
      img: " https://i.ibb.co/R2hFS0g/curry-rice.jpg",
      name: "Curry",
      description:
        "Nothing beats the tase and variesties of combination of curry ",
    },
    {
      id: 5,
      img: " https://i.ibb.co/61T8wZ3/ramen.jpg",
      name: "Ramen",
      description:
        "Ramen is the superior and more taste enriched version of noodles",
    },
  ];
  return (
    <section className=" container mx-auto py-10 p-4 my-10">
      <SectionHeading t1={"Trending"} t2={"Menus"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 my-10 gap-10">
        {topMenus.map(({ id, img, name, description }) => (
          <div className="space-y-3" key={id}>
            <div className="relative">
              <img src={img} alt={name} />
              <p className="absolute top-0 text-2xl font-bold  h-10 w-10 text-center rounded-se-xl rounded-es-xl bg-slate-50">
                {id}
              </p>
            </div>
            <p className="text-3xl font-serif text-center">{name}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingMenu;