import css from "./PizzaCard.module.css"
import { basketActions } from "../../redux/basketSlice"
import { useDispatch } from "react-redux"
import Api from "../../api/api"

function PizzaCard({ img, title, description, price, addToBasket, id, isAdmin, link }) {
    const dispatch = useDispatch()
    const handleReduxClick = () => {
        const test = basketActions.addToBasket({ img, title, description, price, addToBasket, id })
        dispatch(test)
    }
    const handleDelete = () => {
        if (link === "pizza"){
        Api.deletePizza(id).then(()=>{
            window.location.reload()
        })
        }else{
          Api.deleteDrink(id).then(()=>{
            window.location.reload()
        })
        // fetch(`${base_url}${link}/${id}`, {
        //     method: "DELETE"
        // })
        //     .then(() => {
        //         alert("sucsessfully")
        //         window.location.reload()
        //     })
    }
    return (
        <div className={css.wrapper}>
            <div className={css.imageWrapper}>
                <img src={
                    img || "https://cdn.dodostatic.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.jpeg"
                }
                    alt={title}
                />
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.description}>
                {description}
            </div>
            <div className={css.footer}>
                <div className={css.price}>
                    от {price} сом
                </div>
                {!isAdmin && <button onClick={handleReduxClick} className="btn">Выбрать</button>}

            </div>
            {isAdmin && (<div>
                <button onClick={handleDelete} className="btn">Удалить </button>
                <button className="btn">Изменить </button>
            </div>
            )}
        </div>
    )
}
}

export default PizzaCard