import css from "./PizzaCard.module.css"


function PizzaCard({ img, title, description, price, addToBasket, id, isAdmin }) {
    const handle = () => addToBasket({ img, title, description, price, addToBasket, id })
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
                {!isAdmin && <button onClick={handle} className="btn">Выбрать</button>}

            </div>
            {isAdmin && (<div>
                <button className="btn">Удалить </button>
                <button className="btn">Изменить </button>
            </div>
            )}
        </div>
    )
}

export default PizzaCard