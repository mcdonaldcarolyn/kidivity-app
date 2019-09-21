import React, {Component} from 'react';
import FormComponent from "../Components/ActivityFormComponent"
import ListComponent from '../Components/ActivityListComponent';

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
                
            </div>
        )
    }
}
