import { connect } from "react-redux";
import PizzaBlocks from "./PizzaBlocks";

let mapStateToProps = (state) => {
	return {
		pizza: state.pizza.pizzaBlocks,
	};
};
const PizzaBlocksContainer = connect(mapStateToProps, {})(PizzaBlocks);

export default PizzaBlocksContainer;
