import React, {Component} from 'react';

export default class HomePageComponent extends Component {
    render() {
        return (
            <div>
                Hello to Kidivity- Where you can create a master list of Kid acivities!
                <br/>
                <a href="/activities">Go to activities</a>
                <br/>
                <a href="/new">Create a new Activity</a>

                
            </div>
        )
    }
}