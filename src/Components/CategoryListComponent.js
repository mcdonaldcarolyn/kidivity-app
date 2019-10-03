import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CategoryListComponent extends Component {
  renderCategories = () => {
      const categories = this.props.categories || [];
      debugger
    return categories.map(category => {
      const url = "/categories/" + category.id;
      return (
        <li key={category.id}>
          <Link to={url}>{category.title}</Link>
        </li>
      );
    });
  };
  render() {
    return <ul>{this.renderCategories()}</ul>;
  }
}
