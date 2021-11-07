import PizzaBlock from "./PizzaBlock/PizzaBlock";
import React from "react";

const PizzaBlocks = (props) => {
  // console.log(props);
  let pizzaElements;
  if (props.pizza.currentPizzaBlock.length === 0) {
    pizzaElements = props.items.map((p) => (
      <PizzaBlock
        activeType={props.pizza.activeType}
        setActiveType={props.setActiveType}
        size={props.pizza.size}
        type={props.pizza.type}
        {...p}
        key={p.id}
      />
    ));
  } else {
    pizzaElements = props.pizza.currentPizzaBlock.map((p) => (
      <PizzaBlock
        activeType={props.pizza.activeType}
        setActiveType={props.setActiveType}
        type={props.pizza.type}
        size={props.pizza.size}
        {...p}
        key={p.id}
      />
    ));
  }

  return <div className="content__items">{pizzaElements}</div>;
};

export default PizzaBlocks;
