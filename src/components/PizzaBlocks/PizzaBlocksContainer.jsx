import { connect } from "react-redux";
import React from "react";
import PizzaBlocks from "./PizzaBlocks";
import {
  newPizzaBlocks,
  getPizzaItemsThunk,
  setActiveType,
} from "../../Redux/pizza_reducer";

// eslint-disable-next-line no-undef
class PizzaBlocksContainer extends React.Component {
  componentDidMount() {
    this.props.getPizzaItemsThunk();
  }

  render() {
    return (
      <PizzaBlocks
        // usersAPI={this.props.usersAPI.getPizzas}
        setActiveType={this.props.setActiveType}
        pizza={this.props.pizza}
        items={this.props.pizza.items}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    pizza: state.pizza,
    items: state.items,
  };
};
export default connect(mapStateToProps, {
  newPizzaBlocks,
  getPizzaItemsThunk,
  setActiveType,
})(PizzaBlocksContainer);
