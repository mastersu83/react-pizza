import { usersAPI } from "../api/api";
const NEW_PIZZA_BLOCK = "NEW_PIZZA_BLOCK";
const NEW_PIZZA_ITEMS = "NEW_PIZZA_ITEMS";

let initialState = {
  type: ["тонкое", "традиционное"],
  size: [26, 30, 40],
  items: [],
  currentPizzaBlock: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PIZZA_BLOCK:
      return {
        ...state,
        currentPizzaBlock: action.newBlock,
      };
    case NEW_PIZZA_ITEMS:
      return {
        ...state,
        items: [...action.newItems],
      };

    default:
      return state;
  }
};

export const newPizzaBlocks = (newBlock) => ({
  type: NEW_PIZZA_BLOCK,
  newBlock,
});
export const newPizzaItems = (newItems) => ({
  type: NEW_PIZZA_ITEMS,
  newItems,
});

export const getPizzaItemsThunk = () => {
  return (dispatch) => {
    usersAPI.getPizzas().then((items) => {
      dispatch(newPizzaItems(items));
    });
  };
};

export default pizzaReducer;
