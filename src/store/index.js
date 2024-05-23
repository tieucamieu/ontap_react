/*
- Reducer ()
*/

import { configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from "./slices/user.slice";

export const store = configureStore({
    reducer: {
       userStore: userReducer
    }
})

store.dispatch(userAction.fetchUserDataThunk())