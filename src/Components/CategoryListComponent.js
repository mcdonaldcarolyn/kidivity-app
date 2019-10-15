import React, { Component } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import { Button } from "./node_modules/react-bootstrap";

export default class CategoryListComponent extends Component {
  
  renderCategories = () => {
    const categories = this.props.categories || [];
    return categories.map(category => {
      const url = "/categories/" + category.id;
      return (
        <div key={category.id}>
          <Link to={url}>
            <Button variant="outline-dark">{category.title}</Button>
          </Link>
        </div>
      );
    });
  };
  render() {
      return <ul>{ this.renderCategories() }</ul>;
  }
}
