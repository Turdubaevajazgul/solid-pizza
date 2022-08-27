
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Api from "../api/api"

export const getAlldrinks = createAsyncThunk(
    "potable/GET_ALL_PIZZAS",
    async () => {
        const res = await Api.getPotable()
        return res.data
    }
)
const potableSlice = createSlice({
    name: "potable",
    initialState: {
        data: JSON.parse(localStorage.getItem("potable")) || []
    },
    reducers: {
        addPotable: (state, action) => {
            state.data = action.payload
        }
    }
})


export const potableActions = potableSlice.actions
export const potableReducer = potableSlice.reducer

