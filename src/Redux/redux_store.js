import { combineReducers, createStore } from 'redux';
import pizzaReducer from './pizza_reducer';
import categoriesReducer from './categories_reducer';
import sortReducer from './sort_reducer';

let reducers = combineReducers({
	pizza: pizzaReducer,
	categories: categoriesReducer,
	sort: sortReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
