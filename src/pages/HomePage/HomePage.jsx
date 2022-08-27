import Slider from "react-slick";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import Potable from "../../components/Potable/Potable";
import SliderCard from "../../components/sliderCard/SliderCard";
import { useSelector } from "react-redux/es/exports";
const sliderCards = [
  {
    id: 1,
    img: "https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg",
  },
  {
    id: 2,
    img: "https://roll-club.kh.ua/wp-content/uploads/2021/06/pizza.jpg",
  },
  {
    id: 3,
    img: "https://odessa-life.od.ua/wp-content/uploads/2021/09/monopizza01.jpg",
  },
  {
    id: 4,
    img: "https://vesti.ua/wp-content/uploads/2021/02/822fccd9a214266b046851374d588465.jpg",
  },
  {
    id: 5,
    img: "https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail-500x500.png",
  },
  {
    id: 6,
    img: "https://www.wholesomeyum.com/wp-content/uploads/2017/04/wholesomeyum-Fathead-Pizza-Crust-Recipe-Low-Carb-Keto-Pizza-4-Ingredients-17.jpg",
  },
  {
    id: 7,
    img: "https://golos.ua/images/2022/02/pytstsa.jpg",
  },
  {
    id: 8,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2022/01/pizza-topping-ideas.jpg",
  },
];



function HomePage() {
  const pizzas= useSelector((state)=>state.pizzas.data)
  const potable=useSelector((state)=>state.potable.data)
  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  return (
    <div className="container page">
      <Slider {...settings}>
        {sliderCards.map((item) => (
          <SliderCard img={item.img} />
        ))}
      </Slider>
      <h1 className="title">Пицца</h1>
      <div className="cards_wrapper">
        {pizzas.map((pizza) => (
          <PizzaCard 
            key={pizza.id}
            id={pizza.id}
            title={pizza.title}
            description={pizza.description}
            price={pizza.price}
            />
        ))}
      </div>
      <h1 className="title">Напитки</h1>
      <div className="cards_wrapper">
        {potable.map((elem) => (
          <Potable key={elem.id}
            id={elem.id}
            img={elem.img}
            title={elem.title}
            description={elem.description}
            price={elem.price} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
