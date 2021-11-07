import { combineReducers, createStore, applyMiddleware } from "redux";
import pizzaReducer from "./pizza_reducer";
import categoriesReducer from "./categories_reducer";
import sortReducer from "./sort_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  pizza: pizzaReducer,
  categories: categoriesReducer,
  sort: sortReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
