import React, {Component} from 'react';

export default class HomePageComponent extends Component {
    render() {
        return (
            <div>
                Welcome to Kidivity- Where you can create a master list of Kid acivities!
                <br/>
                <a href="/lists/littles">Littles List</a>
                <br/>
                <a href="/lists/biggerkids">Biggerkids</a>
                <br/>
                <a href="/lists/tweens">Tweens and Teens</a> 
                

                
            </div>
        )
    }
}