import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import ProductViewPage from "./Pages/ProductViewPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/product" component={ProductViewPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
