import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Medium from "./components/home/Medium";
import Hard from "./components/home/Hard";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/medium" component={Medium} />
          <Route path="/hard" component={Hard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
