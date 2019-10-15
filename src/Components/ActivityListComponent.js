import React, {Component} from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

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