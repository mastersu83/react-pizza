import { connect } from "react-redux";
import PizzaBlocks from "./PizzaBlocks";
import { newPizzaBlocks } from "../../Redux/pizza_reducer";

let mapStateToProps = (state) => {
  return {
    pizza: state.pizza,
  };
};
const PizzaBlocksContainer = connect(mapStateToProps, { newPizzaBlocks })(
  PizzaBlocks
);

export default PizzaBlocksContainer;
