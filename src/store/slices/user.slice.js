import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: [
        {
            id: 1,
            name: "P"
        }
    ],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
            // return [
            //     ...state,
            //     action.payload
            // ]
        }
    }
})


export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;