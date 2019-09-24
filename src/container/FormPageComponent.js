import React, {Component} from 'react';
import ActivityFormComponent from "../Components/ActivityFormComponent"
import ListComponent from '../Components/ActivityListComponent';
import {addActivity} from '../actions/listActions';
import {connect} from "react-redux";

export default class FormPageComponent extends Component {
    constructor(){
        super()
        this.state = {
            activities: []
        }
    }
    addActivity = (name, address, description, category) => {
        const { id } = this.props.match.params;
        console.log ("got to addItem in activiies page")
        this.setState({
            activities: [...this.state.activities, { name, address, description, category: id }]
        })
    }
    render() {
        const { id } = this.props.match.params;

        return (
            <div>
                <ListComponent category={id} activities={this.state.activities}/>
                <hr></hr>
                <ActivityFormComponent addActivity={this.addActivity}/>
                <a href="/"> Back to Home </a>
            </div>
        )
    }
}