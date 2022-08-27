import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateNewElement from './pages/CreateNewElement/CreateNewElement';
import { useEffect, useState } from 'react';
import { base_url } from './constants/constants';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getAllpizzas, pizzasActions } from './redux/pizzasSlice';
import { potableActions } from './redux/potableSlice';
import { testActions } from './redux/test';
import axios from "axios"

function App() {
  // const isPizzasLoading = useSelector((state) => state.pizzas.isLoading)
  // const isDrinksLoading = useSelector((state) => state.drinks.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllpizzas())
    dispatch(getAllpizzas())
  }, [dispatch]);

  // if (isPizzasLoading || isDrinksLoading) {
  //   return <h1>...Loading</h1>
  // }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create-new-item" element={<CreateNewElement />} />
      </Routes>
    </div>
  );
}

export default App;
