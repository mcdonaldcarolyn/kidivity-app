import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

export class ActivityPageComponent extends Component{
    render(){
        const {id } = this.props.match.parms;
        const activityId = parseInt(id, 10);
        const activity = this.props.activities.find(activity => activity.id === activityId);
        return (
            <div>
                <h1>{activity.name}</h1>
                <div>Category: {activity.category}</div>
                <div>Address: {activity.address}</div>
                <div>Description: {activity.description}</div>
                
            </div>
        )
    }
}