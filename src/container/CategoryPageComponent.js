import React, { Component } from "react";
import ActivityListComponent from "../Components/ActivityListComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CategoryPageComponent extends Component {
  render() {
    const id = parseInt(this.props.match.params.id, 10);
    const categories = this.props.categories || [];
    const category = categories.find(cat => cat.id === id);
    const activitiesForCategory = this.props.activities.filter(activity =>
      activity.categories.find(cat => cat.id === id)
    );

    if (!category) {
      return <div></div>;
    }

    return (
      <div>
        <h1> Activities for {category.title}</h1>
        <ActivityListComponent activities={activitiesForCategory} />
        <Link to="/activities-new">Add new</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activities: state.activities,
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryPageComponent);
