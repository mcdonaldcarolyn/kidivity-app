import React, { Component } from "react";
// import {categories } from '../data/categories';
import { addActivity } from "../actions/listActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ActivityFormComponent extends Component {
  state = {
    name: "",
    address: "",
    description: "",
    category_attributes: { title: "" },
    category_ids: []
  };

  handleNameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };
  handleAddressChange = event => {
    event.preventDefault();
    this.setState({
      address: event.target.value
    });
  };
  handleDescriptionChange = event => {
    event.preventDefault();
    this.setState({
      description: event.target.value
    });
  };
  handleCategoryChange = event => {
    event.preventDefault();
    this.setState({
      category: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addActivity(this.state);
    this.setState({
      name: "",
      address: "",
      description: "",
      category_attributes: { title: "" },
      category_ids: []
    });
  };
  renderCategories() {
    const categories = this.props.categories || [];
    return categories.map((category, idx) => {
      return (
        <option key={idx} value={category.id}>
          {category.title}
        </option>
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="address"
            onChange={this.handleAddressChange}
          />
          <input
            type="text"
            placeholder="description"
            onChange={this.handleDescriptionChange}
          />
          <select name="category" onChange={this.handleCategoryChange}>
            <option>choose category</option>
            {this.renderCategories()}
          </select>
          <button type="submit">create</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addActivity }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFormComponent);
