import { connect } from "react-redux";
import { categoriesActive } from "../../Redux/categories_reducer";
import { Home } from "../index";

let mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const HomeContainer = connect(mapStateToProps, { categoriesActive })(Home);

export default HomeContainer;
