import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
const rootReducer = combineReducers({
    Auth:AuthReducer,
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));