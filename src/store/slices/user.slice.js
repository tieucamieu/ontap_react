import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        add: (state, action) => {
            state.data.push(action.payload)
        },
        detele: (state, action) => {
            state.data = state.data.filter(user => user.id != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserDataThunk.pending, (state, action) => {

        })
        builder.addCase(fetchUserDataThunk.fulfilled, (state, action) => {
            //console.log("da vao day nekkkk", action.payload)
            state.data = action.payload
        })
    }
})

const fetchUserDataThunk = createAsyncThunk(
    'user/fetchUserData',
    async () => {
        let res =  await axios.get("http://localhost:3000/users")
        return res.data
    }
)


export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    fetchUserDataThunk
};