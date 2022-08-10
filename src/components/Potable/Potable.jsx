import css from "./Potable.module.css"


function Potable(props) {
    return (
        <div className={css.wrapper}>
            <div className={css.imageWrapper}>
                <img src={props.img || "https://cdn.dodostatic.net/static/Img/Products/d9b8bda61b3a423faf5b5caf1f53a69b_366x366.jpeg"} alt={props.title} />
            </div>
            <div className={css.title}>
                {props.title}
            </div>
            <div className={css.description}>
                {props.description}
            </div>
            <div className={css.footer}>
                <div className={css.price}>
                    125 {props.price} сом
                </div>
                <button className="btn">В корзину</button>
            </div>
        </div>
    )
}

export default Potable