import { connect } from "react-redux";
import Cart from "./Cart";

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const CartContainer = connect(mapStateToProps, {})(Cart);

export default CartContainer;
