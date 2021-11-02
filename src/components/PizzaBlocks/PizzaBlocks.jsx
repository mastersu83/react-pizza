import PizzaBlock from "./PizzaBlock/PizzaBlock";
import React from "react";

const PizzaBlocks = (props) => {
  const pizzaLenght = props.pizza.pizzaBlocks;
  let pizzaElements;
  if (props.pizza.currentPizzaBlock.length === 0) {
    pizzaElements = pizzaLenght.map((p, index) => (
      <PizzaBlock
        index={index}
        pizza={props.pizza}
        categories={p.categories}
        key={p.id}
        id={p.id}
        image={p.image}
        title={p.title}
        dough1={p.dough1}
        dough2={p.dough2}
        size26={p.size26}
        size30={p.size30}
        size40={p.size40}
        price={p.price}
        add={p.add}
        pieces={p.pieces}
      />
    ));
  } else {
    pizzaElements = props.pizza.currentPizzaBlock.map((p, index) => (
      <PizzaBlock
        index={index}
        pizza={props.pizza}
        categories={p.categories}
        key={p.id}
        id={p.id}
        image={p.image}
        title={p.title}
        dough1={p.dough1}
        dough2={p.dough2}
        size26={p.size26}
        size30={p.size30}
        size40={p.size40}
        price={p.price}
        add={p.add}
        pieces={p.pieces}
      />
    ));
  }

  return <div className="content__items">{pizzaElements}</div>;
};

export default PizzaBlocks;
