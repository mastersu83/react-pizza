import { connect } from "react-redux";
import React from "react";
import PizzaBlocks from "./PizzaBlocks";
import { getPizzaItemsThunk } from "../../Redux/actions/pizza";
import { addPizza } from "../../Redux/actions/cart";

class PizzaBlocksContainer extends React.Component {
  componentDidMount() {
    this.props.getPizzaItemsThunk();
  }

  render() {
    return (
      <PizzaBlocks
        setActiveType={this.props.setActiveType}
        pizza={this.props.pizza}
        items={this.props.pizza.items}
        addPizza={this.props.addPizza}
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
  getPizzaItemsThunk,
  addPizza,
})(PizzaBlocksContainer);
