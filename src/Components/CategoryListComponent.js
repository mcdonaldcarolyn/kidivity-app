import React, {Component } from "react";
import { Link } from 'react-router-dom';
import {categories} from '../data/categories';
export default class CategoryListComponent extends Component {
    renderCategories = () => {
        return this.props.categories.map(category =>{
            const url = "/categories/" + category.slug;
            return (
                <li key={category.id}>
                    <Link to={url}>{category.name}</Link>
                </li>
            );
        })
    }
    render(){
        return (
            <ul>{this.renderCategories()}</ul>
        )
    }
}