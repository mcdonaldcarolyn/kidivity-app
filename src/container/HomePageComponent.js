import React, {Component} from 'react';
import CategoryListComponent from '../Components/CategoryListComponent'
import {categories} from '../data/categories';
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