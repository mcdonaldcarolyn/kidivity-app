import React, {Component} from 'react';
import FormComponent from "./FormComponent"
import ListComponent from './ListComponent';

export default class ActivityPageComponent extends Component{
    constructor(){
        super()
        this.state = {
            activities: []
        }
    }
    addItem = (name, address, description) => {
        console.log ("got to addItem in activiies page")
        
    }
    render() {
        return (
            <div>
                <ListComponent activites={this.state.activities}/>
                <FormComponent addItem={this.addItem}/>
            </div>
        )
    }
}