import PizzaBlock from "./PizzaBlock/PizzaBlock";
import React from "react";

const PizzaBlocks = (props) => {
  const addCartPizza = (e) => {
    props.addPizza(props.items[e]);
  };

  let pizzaElements;
  if (props.pizza.currentPizzaBlock.length === 0) {
    pizzaElements = props.items.map((p, index) => (
      <PizzaBlock
        index={index}
        addPizza={addCartPizza}
        size={props.pizza.size}
        type={props.pizza.type}
        {...p}
        key={p.id}
      />
    ));
  } else {
    pizzaElements = props.pizza.currentPizzaBlock.map((p, index) => (
      <PizzaBlock
        index={index}
        addPizza={addCartPizza}
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
