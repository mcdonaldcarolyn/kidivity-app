import React, { Component } from "react";


export class ActivityPageComponent extends Component {
  
  render(){
    const sectionStyle = {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      width: "1500px"
    };
    const { id } = this.props.match.params;
    const activityId = parseInt(id, 10);
    const activities = this.props.activities;
    const activity =
      activities.find(activity => activity.id === activityId);
    const category = activity.category.title;
    
    return (
      <div style={sectionStyle}>
        <h1>{activity.name}</h1>
        <div>Category: {category.title}</div>
        <div>Address: {activity.address}</div>
        <div>Description: {activity.description}</div>
        <br />
        <a href="/"> Back to Home </a>
      </div>
    );
  }
}


export default (ActivityPageComponent);
