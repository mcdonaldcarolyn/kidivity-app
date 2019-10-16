import React, { Component } from "react";
import ActivityListComponent from "../blah/ActivityListComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class CategoryPageComponent extends Component {
  render() {
    const sectionStyle = {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1569271836752-ed9351b75521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      width: "1500px"
    };
    const linkColor = {
      color: "black"
    };
    const id = parseInt(this.props.match.params.id, 10);
    const categories = this.props.categories || [];
    const category = categories.find(cat => cat.id === id);
    

    if (!category) {
      return <div></div>;
    }

    return (
      <div style={sectionStyle}>
        <br />
        <h1> Activities for {category.title}</h1>
        <div style={linkColor}>
          <ActivityListComponent activities={this.props.activities} />
        </div>
        <br />
        <div style={linkColor}>
          <Link to="/activities-new" style={linkColor}>
            Add new
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activities: state.manageActivities.activities,
  categories: state.manageCategories.categories
});

export default connect(mapStateToProps)(CategoryPageComponent);
