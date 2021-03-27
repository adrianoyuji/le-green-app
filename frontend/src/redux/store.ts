import { combineReducers, createStore } from "redux";
import UserReducer from "./Auth/Auth.reducer";

const rootReducers = combineReducers({ auth: UserReducer });

const store = createStore(rootReducers);

export default store;
