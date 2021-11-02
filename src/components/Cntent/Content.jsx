import React from "react";
import { Cart, CartEmpty, HomeContainer } from "../../pages";
import { Route } from "react-router-dom";

const Content = (props) => {
  return (
    <div className="content">
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cartempty" component={CartEmpty} />
    </div>
  );
};

export default Content;
