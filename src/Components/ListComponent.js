import React, {Component} from 'react';
 
export default class ListComponent extends Component{
    renderActivities = () => {
        return this.props.activities
            .filter(activity => activity.category === this.props.category)
            .map((activity, idx) => {
                return (
                    <div key={idx}>{activity.name}<br></br>{activity.address}<br></br>{activity.description}</div>
                    
                )
            });
    }
    
    render(){
        return(
        
            <div>
                <li>
                <a href='/list/activity.id'>{this.renderActivities()}</a>
                </li>
            </div>
        )
    }
}