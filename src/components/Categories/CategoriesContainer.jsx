import { connect } from "react-redux";
import Categories from "./Categories";
import { categoriesActive } from "../../Redux/categories_reducer";
import { newPizzaBlocks, newPizzaItems } from "../../Redux/pizza_reducer";

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
    pizza: state.pizza,
  };
};
const CategoriesContainer = connect(mapStateToProps, {
  categoriesActive,
  newPizzaItems,
  newPizzaBlocks,
})(Categories);

export default CategoriesContainer;
