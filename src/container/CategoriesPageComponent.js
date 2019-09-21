import React, {Component} from 'react';
import FormComponent from "../Components/ActivityFormComponent"
import ListComponent from '../Components/ActivityListComponent';

export default class CategoriesPageComponent extends Component {
    render(){
        return(
            <div>
            <h1>Categories</h1>
            <CategoryListComponent categories={categories}/>
            </div>
        )
    }
}