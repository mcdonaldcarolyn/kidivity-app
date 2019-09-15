import React, {Component} from 'react';

export default class ListComponent extends Component{
    state={
        activity: []
    }
    renderActivities = () => {
        return this.props.activities.map(activity => {
            return (
                <div key={activity.id}>{activity.name}<br></br>{activity.address}<br></br>{activity.description}</div>
                
            )
        })
    }
    render(){
        return(
        
            <div>
                <li>
                {this.renderActivities()}
                </li>
            </div>
        )
    }
}