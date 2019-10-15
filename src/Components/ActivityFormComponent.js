import React, { Component } from "./node_modules/react";


class ActivityFormComponent extends Component {
  state = {
    name: "",
    address: "",
    description: "",
    category_id: "",
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
      category_id: event.target.value
    })
}
  

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addActivity(this.state);
    this.setState({
      name: "",
      address: "",
      description: "",
      category_id: ""
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
    console.log(this.state);

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

// const mapDispatchToProps = (dispatch)=> {
//   return bindActionCreators({ addActivity }, dispatch);
// }

export default (ActivityFormComponent);
