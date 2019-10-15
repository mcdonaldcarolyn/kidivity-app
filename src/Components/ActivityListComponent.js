import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ActivityListComponent extends Component{
    
    renderActivities = () => {
        const linkColor = {
            color: "black"
        };
        return this.props.activities.map((activity, idx) => {
            const url = '/activities/' + activity.id;
            
            return (
                <li key={idx} style={linkColor}>
                    <Link  to={url}>{activity.name}</Link>
                </li>
            );
        });
    };

    render(){
        return(
            <ul>
                {this.renderActivities()}
            </ul>
        );
    }
}