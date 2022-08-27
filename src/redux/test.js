
import { createSlice } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "test",
    initialState: {
        name: "",
        surname: "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
            state.surname = action.payload
        }

    }
})

export const testActions = testSlice.actions
export const testReducer = testSlice.reducer

