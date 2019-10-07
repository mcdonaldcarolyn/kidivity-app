import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class CategoryListComponent extends Component {
  renderCategories = () => {
    const categories = this.props.categories || [];
    return categories.map(category => {
      const url = "/categories/" + category.id;
      return (
        <li key={category.id}>
          <Link to={url}>
            <Button variant="outline-success">{category.title}</Button>
          </Link>
        </li>
      );
    });
  };
  render() {
      return <ul>{ this.renderCategories() }</ul>;
  }
}
