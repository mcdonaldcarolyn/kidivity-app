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
    render(){
        return (
            <div>
                <FormComponent addItem={this.addItem}/>
            </div>
        )
    }
}