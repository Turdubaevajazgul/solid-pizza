import {useState } from "react";
import Infopages from "../../components/infopage/Infopages";
import { useEffect } from "react";

function Infopage() {
    const [arr, setArr] = useState([])
    useEffect(()=>{
        fetch("https://62d0201c1cc14f8c0884e83d.mockapi.io/House")
        .then((response)=> response.json())
        .then((data)=>{setArr(data)})
    },[])
    return (
        <div className="container">
            <h1 className="h1">Часто заказывают</h1>
            <div className="pages">
                {
                    arr.map((item) => <Infopages key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)
                }

            </div>
            <div className="About">
                    <img src="https://cdn.dodostatic.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="" />
                    <div className="text">
                    <h1>Без свинины</h1>
                    <p>Мы готовим из цыпленка и говядины</p>
                    </div>
                </div>   
        </div>
    )
}

export default Infopage ;