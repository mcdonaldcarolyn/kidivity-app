import React, {Component} from 'react';

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