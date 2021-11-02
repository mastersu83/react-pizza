import React from "react";

const Categories = (props) => {
  // console.log(props);
  const [active, setActive] = React.useState(0);
  let changeActive = (index) => {
    setActive(index);
    props.categoriesActive(index);
    currentCategories(index);
  };

  let currentCatState = [];

  const currentCategories = (index) => {
    let currentCat = index;
    currentCatState = props.pizza.map((e) => {
      if (props.categories.categories[currentCat].categories === e.categories) {
        currentCatState.push(e);
        props.newPizzaBlocks(currentCatState);
      } else if (props.categories.categories[currentCat].categories === 0) {
        props.newPizzaBlocks(props.pizza);
      }
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
