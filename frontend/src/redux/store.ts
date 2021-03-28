import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./Auth/Auth.reducer";
import NavigatorReducer from "./Navigation/Navigation.reducer";
const rootReducers = combineReducers({
  auth: UserReducer,
  navigation: NavigatorReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
