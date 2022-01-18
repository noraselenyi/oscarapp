import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import logo_oscars from "./logo_oscars.jpg";
import Filmlist from "./components/filmlist";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_oscars} className="oscarlogo" alt="logo" />
      </header>

      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={SignIn} />
          </div>
        </Router>
      </AuthProvider>
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
