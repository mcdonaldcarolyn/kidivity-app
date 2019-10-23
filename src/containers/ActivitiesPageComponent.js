import React, { Component } from "react";
import ActivityListComponent from "../components/ActivityListComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ActivityPageComponent } from "./ActivityPageComponent";

export class ActivitiesPageComponent extends Component {
  handleSearch = event => {
    const filteredActivities = this.props.activities.filter(
      activity => activity.name === event.target.value
    );

    this.setState({ filteredActivities });

    console.log(filteredActivities);
  };

  // handleSearch = event => {
  //     event.preventDefault();
  //     this.pr
  // }
  render() {
    const filteredActivities =
      (this.state && this.state.filteredActivities) || [];
    const activitiesHtml = filteredActivities.map(activity => {
      return <div>{activity.name}</div>;
    });
    return (
      <div>
        <h1>All fun kidivities</h1>
        <ActivityListComponent activities={this.props.activities} />
        <Link to="/activities-new">Add new Activity</Link>
        <br />
        <input
          type="text"
          placeholder="search.."
          onChange={this.handleSearch}
        ></input>
        {activitiesHtml}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.manageActivities.activities
});

export default connect(
  mapStateToProps,
  null
)(ActivitiesPageComponent);
