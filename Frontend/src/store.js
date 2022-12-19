import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer } from "./AuthReducer/reducer"


export const store = legacy_createStore( reducer, applyMiddleware(thunk));