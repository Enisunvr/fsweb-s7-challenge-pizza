import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order-pizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
