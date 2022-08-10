import css from "./BasketModal.module.css"
import { Link } from "react-router-dom"

function BasketModal({ opened, OnBasketOpen, basket }) {
  const getSum = () => {
    const result = basket.reduce((sum, item) => {
      return sum + Number(item.price)
    }, 0)
    return result
  }
  return (
    <div className={`${css.wrapper} ${opened ? css.active : ""}`}>
      <div onClick={OnBasketOpen} className={css.darkBlock}>
      </div>
      {
        basket.length
          ? <div className={css.modal}>
            <div className={css.header}> <h1> {basket.length} товар на {getSum()} сом</h1></div>
            {basket.map((item) =>
              <div className={css.BasketMap}>
                <div className={css.ChoosePiz}>
                  <div className={css.BasketPrice}>
                    <img className={css.img} src="https://cdn.dodostatic.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_366x366.jpeg" alt="" />
                    <div className={css.text}>
                      <h1>{item.title}</h1>
                      <span>{item.description}</span>
                    </div>
                  </div>
                  <div className={css.SliderPrice}>{item.price} сом</div>
                </div>
                <div className={css.Slider}>
                  <p className={css.promo}>Промокод</p>
                  <div className={css.ChekInfo}>
                    <div className={css.Sale}>
                      <p> {basket.length} товар</p>
                      <p>{getSum()} сом</p>
                    </div>
                    <div className={css.Dodo}>
                      <p>
                        Начислим додокоины
                        <img className={css.DodoImg} src="https://s.pfst.net/2015.09/8392191634136b9d475733868eb02d48e33b28aba6c8_b.jpg" alt="" />
                      </p>
                      <p>+21</p>
                    </div>
                    <div className={css.location}>
                      <p>Доставка
                        <img className={css.DodoImg} src="https://s.pfst.net/2015.09/8392191634136b9d475733868eb02d48e33b28aba6c8_b.jpg" alt="" />
                      </p>
                      <p>Бесплатно</p>
                    </div>
                  </div>
                  <div className={css.check}>
                    <h1>Сумма заказа</h1>
                    <h1>{getSum()} сом</h1>
                  </div>
                  <button className={css.SliderButton}>К оформлению заказа</button>
                </div>
              </div>)}
          </div>
          : <div className={css.modal}>
            <div className={css.BtnImg}>
              <img src="https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg" alt="" />
              <p>Ваша корзина пуста, откройте «Меню» <br></br>
                и выберите понравившийся товар.<br></br>
                Мы доставим ваш заказ от 365 сом
              </p>
            </div>
            <button onClick className={css.ButtonSlider}>
              <Link className={css.Basket} to="/" target="_blank">
                Вернуться в меню
              </Link>
            </button>
          </div>
      }
    </div>
  )
}

export default BasketModal