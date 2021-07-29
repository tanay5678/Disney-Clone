import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";

function App() {
  // App Link : https://disney-e2998.web.app/
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
