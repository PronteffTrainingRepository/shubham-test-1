import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" render={() =><About name="AboutUS" />} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Contact = () => {
  return (
    <div className="Homestyle">
      <h2>Welcome to ContactUs Page.</h2>
    </div>
  );
};

export default App;
