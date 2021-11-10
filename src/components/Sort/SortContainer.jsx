import { connect } from "react-redux";
import Sort from "./Sort";
import { openPopup, sortActive } from "../../Redux/actions/sort";

let mapStateToProps = (state) => {
  return {
    sortState: state.sort,
  };
};

const SortContainer = connect(mapStateToProps, { openPopup, sortActive })(Sort);

export default SortContainer;
