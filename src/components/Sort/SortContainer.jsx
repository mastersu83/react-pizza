import { connect } from 'react-redux';
import Sort from './Sort';
import { openPopup } from '../../Redux/sort_reducer';

// import CategoriesButton from "./CategoriesButton/CategoriesButton";

let mapStateToProps = (state) => {
	return {
		sort: state.sort.sort,
		popup: state.sort.popup,
	};
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		openPopup,
// 	};
// };
const SortContainer = connect(mapStateToProps, { openPopup })(Sort);

export default SortContainer;
