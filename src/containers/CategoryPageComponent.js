import React, { Component } from "react";
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

    const id = parseInt(this.props.match.params.id, 10);
    const categories = this.props.categories || [];
    const category = categories.find(cat => cat.id === id) || {};
    const activitiesForCategory = (this.props.activities || [])
      .filter(activity => activity.category.id === category.id)
      .map(activity => {
        const url = "/activities/" + activity.id;
        return (
          <li>
            <Link to={url} className="App-link">
              {activity.name}
            </Link>
          </li>
        );
      });
    // const url = '/activities/' + activitiesForCategory.id;
    // const url = this.props.activitiesForCategory.map((idx, activity) => {
    //   const link = "/activities/" + activity.id;
    // });

    return (
      <div style={sectionStyle}>
        <br />
        <h1> Activities for {category.title}</h1>
        <ul>{activitiesForCategory}</ul>
        <br />
        <div>
          <Link to="/activities-new" className="App-link">
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
