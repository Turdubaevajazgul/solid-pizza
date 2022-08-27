
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../api/api"


export const getAllpizzas = createAsyncThunk(
    "pizzas/GET_ALL_PIZZAS",
    async () => {
        const res = await Api.getPizza()
        return res.data
    }
)
const pizzasSlice = createSlice({
    name: "pizzas",
    initialState: {
        data: JSON.parse(localStorage.getItem("pizzas")) || []
    },
    reducers: {
        addPizzas: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
        }
    }
})

export const pizzasActions = pizzasSlice.actions
export const pizzasReducer = pizzasSlice.reducer

