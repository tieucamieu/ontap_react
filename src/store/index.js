/*
- Reducer  (...action)
- 
*/

import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/user.reducer";
import { countReducer } from "./reducers/cont.reducer";

const RooteReducer = combineReducers({
    userStore: userReducer,
    countStore: countReducer
})

export const store = createStore(RooteReducer)
