import React, {Component} from 'react';
// import FormComponent from "../Components/ActivityFormComponent"
import ActivitiesListComponent from '../Components/ActivityListComponent';
import {categories} from '../data/categories';
import { Link } from 'react-router-dom'
export default class CategoryPageComponent extends Component {

    render(){
        const { slug } = this.props.match.params;
        const category = categories.find(cat => cat.slug === slug);
        const activitesForCategory = this.props.activites.filter(
            activity => activity.category === slug
        );
        return(
            <div>
                <h1> Activites for {category.name}</h1>
                <ActivitiesListComponent actvities={activitesForCategory}/>
                <Link to= "/activites-new">Add new</Link>
            </div>
        )
    }
}
