import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { pizzasReducer } from "./pizzasSlice"
import { potableReducer } from "./potableSlice";
import {testReducer} from "./test.js"

const reducers = combineReducers({
    pizzas: pizzasReducer,
    basket: basketReducer,
    potable: potableReducer,
    test:testReducer,
})
export const store = configureStore({
    reducer: reducers
})

store.subscribe(() => {
    const redux = store.getState()
    localStorage.setItem("basket", JSON.stringify(redux.basket.data))
})
