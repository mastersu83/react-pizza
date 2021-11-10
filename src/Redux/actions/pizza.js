import { usersAPI } from "../../api/api";

export const newPizzaBlocks = (newBlock) => ({
  type: "NEW_PIZZA_BLOCK",
  newBlock,
});
export const newPizzaItems = (newItems) => ({
  type: "NEW_PIZZA_ITEMS",
  newItems,
});

export const getPizzaItemsThunk = () => {
  return (dispatch) => {
    usersAPI.getPizzas().then((items) => {
      dispatch(newPizzaItems(items));
    });
  };
};
