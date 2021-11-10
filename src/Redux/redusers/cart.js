let initialState = {
  cart: [],
  cartPizzaItems: [],
  cartLoaded: false,
  test: 0,
  path: "",
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "CART_PAGE":
      return {
        ...state,
        path: state.cart.length ? "/cart" : "/cartempty",
      };
    case "ADD_PIZZA":
      return {
        ...state,
        cart: [...state.cart, action.items],
      };
    default:
      return state;
  }
};

export default cart;
