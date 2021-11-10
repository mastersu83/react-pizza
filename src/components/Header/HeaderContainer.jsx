import { connect } from "react-redux";
import Header from "./Header";
import { cartPage } from "../../Redux/actions/cart";

let mapStateToProps = (state) => {
  return {
    cartLoaded: state.cart.cartLoaded,
    cart: state.cart,
  };
};

const HeaderContainer = connect(mapStateToProps, { cartPage })(Header);

export default HeaderContainer;
