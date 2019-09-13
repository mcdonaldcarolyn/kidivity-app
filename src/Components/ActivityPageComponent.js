import React, {Component} from 'react';
import FormComponent from "./FormComponent"
import ListComponent from './ListComponent';

export default class ActivityPageComponent extends Component {
    constructor(){
        super()
        this.state = {
            activities: []
        }
    }
    addItem = (name, address, description) => {
        console.log ("got to addItem in activiies page")
        this.setState({
            activities: [...this.state.activities, { name, address, description }]
        })
    }
    render() {
        return (
            <div>
                <ListComponent activities={this.state.activities}/>
                <hr></hr>
                <FormComponent addItem={this.addItem}/>
            </div>
        )
    }
}