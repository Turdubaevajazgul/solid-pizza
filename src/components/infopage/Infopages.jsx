import css from "./infopages.module.css"

function Infopages(props) {
    return (
        <div className={css.container}>
            <div  className={css.wrapper}>
            <img src= "https://langformula.ru/wp-content/uploads/2019/04/house.jpg" className="card-img-top" alt="..." />
                <h5 className="main-title">{props.title}</h5>
                <h5 className="main-price">{props.price}</h5> 
                </div>      
        </div>
    )
}
export default Infopages;