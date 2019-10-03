import React, { Component } from "react";
import "./App.css";
import FormPageComponent from "./container/FormPageComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComponent from "./Components/MenuComoponent";
import HomePageComponent from "./container/HomePageComponent";
import CategoryPageComponent from "./container/CategoryPageComponent";
import ActivitiesPageComponent from "./container/ActivitiesPageComponent";
import CategoriesPageComponent from "./container/CategoriesPageComponent";
import ActivityPageComponent from "./container/ActivityPageComponent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addModels } from "./actions/listActions";
export class App extends Component {
  componentDidMount() {
    this.props.addModels();
  }

  render() {
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/categories" component={CategoriesPageComponent} />
          <Route path="/categories/:id" component={CategoryPageComponent} />
          <Route exact path="/activities" component={ActivitiesPageComponent} />
          <Route exact path="/activities-new" component={FormPageComponent} />
          <Route path="/activities/:id" component={ActivityPageComponent} />
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addModels }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);
