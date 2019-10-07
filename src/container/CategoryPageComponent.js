import React, { Component } from "react";
import ActivityListComponent from "../Components/ActivityListComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CategoryPageComponent extends Component {
  render() {
    const sectionStyle = {
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1564612123554-78943ddb2ba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"+ ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
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
      <div style={sectionStyle}>
        <br/>
        <h1> Activities for {category.title}</h1>
        <ActivityListComponent activities={activitiesForCategory} />
        <br/>
        <Link to="/activities-new">Add new</Link>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activities: state.activities,
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryPageComponent);
