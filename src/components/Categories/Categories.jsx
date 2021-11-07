import React from "react";

const Categories = (props) => {
  const [active, setActive] = React.useState(0);
  let changeActive = (index) => {
    setActive(index);
    props.categoriesActive(index);
    currentCategories(index);
  };

  let currentCatState = [];

  const currentCategories = (index) => {
    currentCatState = props.pizza.items.map((e) => {
      if (props.categories.categories[index].categories === e.categories) {
        currentCatState.push(e);
        props.newPizzaBlocks(currentCatState);
      } else if (props.categories.categories[index].categories === 0) {
        props.newPizzaBlocks(props.pizza.items);
      }
      return currentCatState;
    });
  };

  let categoriesButton = props.categories.categories.map((c, index) => (
    <li
      key={`${c.id}_${index}`}
      className={active === index ? "active" : ""}
      onClick={() => changeActive(index)}
    >
      {c.name}
    </li>
  ));
  return (
    <div className="categories">
      <ul>{categoriesButton}</ul>
    </div>
  );
};

export default Categories;
