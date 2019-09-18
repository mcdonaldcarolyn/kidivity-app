import React, {Component} from 'react';
import FormComponent from './FormComponent';

export default class HomePageComponent extends Component {
    render() {
        return (
            <div>
                Welcome to Kidivity- Where you can create a master list of Kid acivities!
                <CategoryListComponent categories={categories}/>
            </div>
        )
    }
}