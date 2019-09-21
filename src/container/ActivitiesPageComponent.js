import React, {Component} from 'react';
import ActivityFormComponent from "../Components/ActivityFormComponent"
import ListComponent from '../Components/ActivityListComponent';
import ActivityListComponent from '../Components/ActivityListComponent';

export default class ActivitiesPageComponent extends Component {
render(){
    return (
        <div>
        <h1>All fun kidivities</h1>
        <ActivityListComponent activities={this.props.activities}/>
        <Link to="/activities-new">Add new Activity</Link>
        </div>
    )
}

}