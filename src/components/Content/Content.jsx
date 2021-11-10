import React from "react";
import { CartEmpty, HomeContainer } from "../../pages";
import { Route } from "react-router-dom";
import CartContainer from "../../pages/Cart/CartContainer";

const Content = () => {
  return (
    <div className="content">
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/cart" component={CartContainer} />
      <Route exact path="/cartempty" render={CartEmpty} />
    </div>
  );
};

export default Content;
