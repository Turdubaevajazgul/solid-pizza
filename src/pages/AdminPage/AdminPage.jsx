import PizzaCard from "../../components/pizzaCard/PizzaCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

function AdminPage() {
const pizzas=useSelector((state)=>state.pizzas.data)
const potable=useSelector((state)=>state.potable.data)

    return (
        <div className="container page">
            <h1>Admin Panel</h1>
            <h2 className="title">Пицца</h2>
            <Link to="/create-new-item" className="btn">+ADD new pizza</Link>
            <div className="cards_wrapper">
                {
                    pizzas.map((item) =>
                        <PizzaCard
                            key={item.id} {...item} isAdmin={true} link="pizza"/>)
                }
            </div>
            <h2 className="title">Напитки</h2>
            <div className="cards_wrapper">
                {
                    potable.map((item) =>
                        <PizzaCard
                            key={item.id} {...item} isAdmin={true} link="potable"/>)
                }
            </div>
        </div>
    )
}
export default AdminPage;