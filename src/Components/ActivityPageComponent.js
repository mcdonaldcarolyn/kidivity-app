import React, {Component} from 'react';
import FormComponent from "./FormComponent"
import { thisExpression } from '@babel/types';

export default class ActivityPageComponent extends Component{
    constructor(){
        super()
        this.state ={
            activities: []
        }
    }
    addItem = e => {
      e.preventDefault();
        console.log ("got to addItem in activiies page")
    }
    render(){
        return (
            <div>
                <FormComponent addItem={this.addItem}/>
            </div>
        )
    }
}