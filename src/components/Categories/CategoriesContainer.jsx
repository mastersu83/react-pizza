import { connect } from "react-redux";
import Categories from "./Categories";

import { newPizzaBlocks, newPizzaItems } from "../../Redux/pizza_reducer";
import { categoriesActive } from "../../Redux/actions/categories";

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
    pizza: state.pizza,
  };
};
const CategoriesContainer = connect(mapStateToProps, {
  newPizzaItems,
  newPizzaBlocks,
  categoriesActive,
})(Categories);

export default CategoriesContainer;
