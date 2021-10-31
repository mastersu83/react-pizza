import { connect } from 'react-redux';
import Sort from './Sort';
import { openPopup, sortActive } from '../../Redux/sort_reducer';

// import CategoriesButton from "./CategoriesButton/CategoriesButton";

let mapStateToProps = (state) => {
	return {
		sortState: state.sort,
	};
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		openPopup,
// 	};
// };
const SortContainer = connect(mapStateToProps, { openPopup, sortActive })(Sort);

export default SortContainer;
