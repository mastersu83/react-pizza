import { combineReducers, createStore, applyMiddleware } from "redux";
import pizza from "./redusers/pizza";
import categories from "./redusers/categories";
import sort from "./redusers/sort";
import thunkMiddleware from "redux-thunk";
import cart from "./redusers/cart";

let reducers = combineReducers({
  pizza,
  categories,
  sort,
  cart,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
