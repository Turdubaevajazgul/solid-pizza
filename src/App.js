import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import BasketModal from './components/BasketModal/BasketModal';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateNewElement from './pages/CreateNewElement/CreateNewElement';
import { useEffect, useState } from 'react';

const local = JSON.parse(localStorage.getItem("basket"))
function App() {
  const [pizzas, setPizzas] = useState([])
  const [potable, setPotable] = useState([])
  const [basket, setBasket] = useState(local || [])
  

  console.log(basket)

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])


  const addToBasket = (pizza) => {
    const isExist = basket.find((item) => item.id === pizza.id)
    console.log(isExist)
    if (!isExist) {
      setBasket([...basket, pizza])
    }
  }
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("https://62d0201c1cc14f8c0884e83d.mockapi.io/pizza"),
      fetch("https://62d0201c1cc14f8c0884e83d.mockapi.io/potable")
    ]).then((res) => {
      Promise.all(res.map((item) => item.json()))
        .then((data => {
          console.log(data)
          setLoading(false)
          setPizzas(data[0])
          setPotable(data[1])
        }))
    })
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>
  }
  return (
    <div className="App">
      <Header />
      <Navbar basket={basket} />
      <Routes>
        <Route path="/button" element={<BasketModal />} />
        <Route path='/' element={<HomePage
          addToBasket={addToBasket}
          pizzas={pizzas}
          potable={potable} />} />
        <Route path="/admin" element={<AdminPage pizzas={pizzas} />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
