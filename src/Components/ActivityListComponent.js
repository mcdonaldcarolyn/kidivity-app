import React, {Component} from 'react';
 
export default class ActivityListComponent extends Component{
    renderActivities = () => {
        return this.props.activities.map((activity, idx) => {
            return (
                <li key= {idx}>
                    <Link to "/activities/{activity.id}">{activity.name}</Link>
                </li>
            );
            });
        };
                    
                
    
    render(){
        return(
                <ul>
                {this.renderActivities()}
                </ul>
           
        )
    }
}