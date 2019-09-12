import React, {Component} from 'react';

export default class ListComponent extends Component{
    state={
        activity: []
    }
    renderActivities = () => {
        return this.props.activities.map(activity => {
            return (
                <Activity key={activity.id}
                activity={activity}>

                </Activity>
            )
        })
    }
    render(){
    return(
    
    <div>
        {this.renderActivities()}
    </div>
)
}
}