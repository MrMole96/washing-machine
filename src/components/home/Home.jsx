import React from "react";
import "./Home.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
export const Home = (props) => {
  return (
    <div className="container">
      <Nav className="nav">
        <NavItem>
          <NavLink href="users">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="reservations">Reservations</NavLink>
        </NavItem>
      </Nav>
      {props.children}
    </div>
  );
};
