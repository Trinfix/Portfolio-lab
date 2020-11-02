import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.scss';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;