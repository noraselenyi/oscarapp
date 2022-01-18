import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import logo_oscars from "./logo_oscars.jpg";
import Filmlist from "./components/filmlist";
import { Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Link to="/">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register" component={Register}></Route>
          <Route exact path="/Login" component={Login}></Route>
        </Switch>
      </AuthProvider>

      <header className="App-header">
        <img src={logo_oscars} className="oscarlogo" alt="logo" />
      </header>
      <p>Welcome to the Oscar app</p>
      <a
        className="App-link"
        href="https://www.imdb.com/list/ls080103875/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Predictions for 2022
      </a>
      <div className="">
        <p> </p>
        <Filmlist />
      </div>
    </div>
  );
};

export default App;
