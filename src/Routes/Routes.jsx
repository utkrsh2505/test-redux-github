import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Search } from "../Pages/Search";
const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Search">
        <Search />
      </Route>
    </>
  );
};
export { Routes };
