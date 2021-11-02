import React from "react";
import {
  SortContainer,
  CategoriesContainer,
  PizzaBlocksContainer,
} from "../../components";

const Home = (props) => {
  return (
    <div className="container">
      <div className="content__top">
        <CategoriesContainer />
        <SortContainer />
      </div>
      <h2 className="content__title">
        {props.categories.categories[props.categories.currentIndex].name}
      </h2>
      <PizzaBlocksContainer />
    </div>
  );
};

export default Home;
