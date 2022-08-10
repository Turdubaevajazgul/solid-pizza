import moduleObjectKeyS from "./Navbar.module.css"
import React from 'react'
import { useState, } from "react";
import BasketModal from "../BasketModal/BasketModal";


function Navbar({basket}) {
  const [isModalOpen, setModalOpen] = useState(false)

  const OnBasketOpen = () => {
    setModalOpen(!isModalOpen)
  }
  return (
    <div className={moduleObjectKeyS.container}>
      <div className={moduleObjectKeyS.Navbar}>
        <a href='#' target_blank>Пицца</a>
        <a href='#' target_blank>Комбо</a>
        <a href='#' target_blank>Закуски</a>
        <a href='#' target_blank>Десерты</a>
        <a href='#' target_blank>Напитки</a>
        <a href='#' target_blank>Другие товары</a>
        <a href='#' target_blank>Акции</a>
        <a href='#' target_blank>Контакты</a>
        <a href='#' target_blank>О нас</a>
        <a href='#' target_blank>Прямой эфир</a>
      </div>
      <div className={moduleObjectKeyS.NavbarRight}>
        <button onClick={OnBasketOpen} className="btn">
          Корзина {basket.length}
        </button>
        {<BasketModal basket={basket} opened={isModalOpen} OnBasketOpen={OnBasketOpen} />}
      </div>
    </div>
  )
}

export default Navbar;