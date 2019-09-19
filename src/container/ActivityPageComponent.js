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
                
            </div>
        )
    }
}