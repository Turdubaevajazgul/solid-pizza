import moduleObjectKeyS from './Header.module.css'

function Header() {
 
    return (
        <header className={moduleObjectKeyS.container}>
            <div className={moduleObjectKeyS.Header}>

                <div className={moduleObjectKeyS.Left}>

                    <div className={moduleObjectKeyS.One}>
                        <a href='#' target_blank>
                            <img className={moduleObjectKeyS.imgD} alt="DODO_PIZZA" src="https://image.winudf.com/v2/image1/cnUuZG9kb3BpenphLmFwcF9pY29uXzE2MTMwNTg2NzJfMDUw/icon.png?w=&fakeurl=1" />
                            <div className={moduleObjectKeyS.h1}>
                                <h1>DODO PIZZA</h1>
                            </div>
                        </a>
                    </div>

                    <div className={moduleObjectKeyS.Two}>
                        <div className={moduleObjectKeyS.MediumBlackHeaderP}>
                            Доставка пиццы Бишкек
                            <div>
                                37 мин 4.57
                                <img className={moduleObjectKeyS.imgStar} src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={moduleObjectKeyS.Three}>
                        <a href='#' target="_blank" className={moduleObjectKeyS.MediumBlackHeaderP}>
                            0 (551) 550-550
                            <div className={moduleObjectKeyS.MediumGreyHeader}>
                                Звонок по телефону
                            </div>
                        </a>
                    </div>

                </div>

                <div className={moduleObjectKeyS.Right}>
                    <a href='#' target="_blank">
                        <img className={moduleObjectKeyS.imgD} alt="D" src="https://www.seekpng.com/png/detail/28-288889_d-twitch-emote-transparent.png" />
                        <div className={moduleObjectKeyS.MediumBlackHeaderP}>
                            Додокоины
                        </div>
                    </a>
                    <div className={moduleObjectKeyS.Btn}>
                        <button className={moduleObjectKeyS.MediumBlackHeaderP}>
                            <a className={moduleObjectKeyS.a_GoInButton} href="#" target="_blank">
                                Войти
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </header>
    )
}
export default Header;