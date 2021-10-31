import { connect } from "react-redux";
import Categories from "./Categories";
// import CategoriesButton from "./CategoriesButton/CategoriesButton";

let mapStateToProps = (state) => {
	return {
		categories: state.categories,
	};
};
const CategoriesContainer = connect(mapStateToProps, {})(Categories);

export default CategoriesContainer;
