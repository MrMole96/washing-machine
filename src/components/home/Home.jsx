import React from "react";
import "./Home.scss";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
export const Home = (props) => {
  return (
    <Container>
      <Nav className="nav">
        <NavItem>
          <NavLink href="users">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Reservations</NavLink>
        </NavItem>
      </Nav>
      {props.children}
    </Container>
  );
};
