import { combineReducers, createStore, applyMiddleware, compose } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.store = store;

export default store;
