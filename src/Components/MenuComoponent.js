import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { categories } from "../data/categories";


export default class MenuComponent extends Component {
  renderCategories(){
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
        <Navbar.Brand href="#home">Kidtivity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {this.renderCategories()}
              <NavDropdown.Divider />

              <NavDropdown.Item href="/activities">View all Activities</NavDropdown.Item>
              <NavDropdown.Item href="/activities-new">Add a new activity</NavDropdown.Item>
              <NavDropdown.Item href="/list/tweens">tweens and older</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}