import React, { Component } from "react";
import CategoryListComponent from "../Components/CategoryListComponent";

import { connect } from "react-redux";

export class HomePageComponent extends Component {
  render() {
    return (
      <div>
        Welcome to Kidivity- Where you can create a master list of Kid
        acivities!
        <CategoryListComponent categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(HomePageComponent);
