import { connect } from "react-redux";
import Categories from "./Categories";

import { newPizzaBlocks } from "../../Redux/actions/pizza";
import { categoriesActive } from "../../Redux/actions/categories";

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.pizza.items,
  };
};
const CategoriesContainer = connect(mapStateToProps, {
  newPizzaBlocks,
  categoriesActive,
})(Categories);

export default CategoriesContainer;
