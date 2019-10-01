import React, { Component } from "react";
import ActivityListComponent from "../Components/ActivityListComponent";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export class CategoryPageComponent extends Component {
  

  render() {
    const { id } = this.props.match.params;
    const category = categories.find(cat => cat.id === id);
    const activitiesForCategory = this.props.activities.filter(
      activity => activity.category === id
    );
    return (
      <div>
        <h1> Activities for {category.name}</h1>
        <ActivityListComponent activities={activitiesForCategory} />
        <Link to="/activities-new">Add new</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({ activities: state.activities });

export default connect(
  mapStateToProps
  
)(CategoryPageComponent);
