let initialState = {
  type: ["тонкое", "традиционное"],
  size: [26, 30, 40],
  items: [],
  currentPizzaBlock: [],
};

const pizza = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_PIZZA_BLOCK":
      return {
        ...state,
        currentPizzaBlock: action.newBlock,
      };
    case "NEW_PIZZA_ITEMS":
      return {
        ...state,
        items: [...action.newItems],
      };

    default:
      return state;
  }
};

export default pizza;
