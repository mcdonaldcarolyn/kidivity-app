import React, {Component} from 'react';


export default class ActivityPageComponent extends Component{
    
    render(){
        return (
            <div>
                <FormComponent addItem={this.addItem}/>
            </div>
        )
    }
}