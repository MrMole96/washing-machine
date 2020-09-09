import React, { Component } from "react";
import "./App.css";
import { Reservations } from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from "./components/users/Users";
import { Home } from './components/home/Home';

export default class App extends Component {
  render() {
    return <Home>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Reservations />
        </Route>
      </Switch>
    </Home>
  }
}
