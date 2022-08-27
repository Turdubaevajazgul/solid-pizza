
import { createSlice } from "@reduxjs/toolkit"


const basketSlice = createSlice({
    name: "basket",
    initialState: {
        data: JSON.parse(localStorage.getItem("basket"))||[],
    },
    reducers: {
        addToBasket: (state,action) => {
            console.log(state)
            state.data.push(action.payload)
        }
    }
})

export const basketActions = basketSlice.actions
export const basketReducer= basketSlice.reducer