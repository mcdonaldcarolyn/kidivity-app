import React, { Component } from "./node_modules/react";
import { Navbar, Nav, NavDropdown } from "./node_modules/react-bootstrap";
import { categories } from "../data/categories";

export default class MenuComponent extends Component {
  renderCategories() {
    return categories.map((category, idx) => {
      const url = "/categories/" + category.slug;
      return (
        <NavDropdown.Item key={idx} href={url}>
          {category.name}
        </NavDropdown.Item>
      );
    });
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Kidtivity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {this.renderCategories()}
              <NavDropdown.Divider />

              <NavDropdown.Item href="/activities">
                View all Activities
              </NavDropdown.Item>
              <NavDropdown.Item href="/activities-new">
                Add a new activity
              </NavDropdown.Item>
              <NavDropdown.Item href="/list/tweens">
                tweens and older
              </NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
