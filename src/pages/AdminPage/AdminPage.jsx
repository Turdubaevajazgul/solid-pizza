import PizzaCard from "../../components/pizzaCard/PizzaCard";
import { Link } from "react-router-dom";


function AdminPage({ pizzas }) {

    return (
        <div className="container page">
            <h1>Admin Panel</h1>
            <h2 className="title">Пицца</h2>
            <Link to="/create-new-item" className="btn">+ADD new pizza</Link>
            <div className="cards_wrapper">
                {
                    pizzas.map((item) =>
                        <PizzaCard
                            key={item.id} {...item} isAdmin={true} />)
                }
            </div>
        </div>
    )
}
export default AdminPage;