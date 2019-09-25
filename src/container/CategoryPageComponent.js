import React, {Component} from 'react';
// import FormComponent from "../Components/ActivityFormComponent"
import ActivityListComponent from '../Components/ActivityListComponent';
import {categories} from '../data/categories';
import { Link } from 'react-router-dom'
import {connect } from 'react-redux';
export class CategoryPageComponent extends Component {

    render(){
        const { slug } = this.props.match.params;
        const category = categories.find(cat => cat.slug === slug);
        const activitiesForCategory = this.props.activities.filter(
            activity => activity.category === slug
        );
        return(
            <div>
                <h1> activities for {category.name}</h1>
                <ActivityListComponent activities={activitiesForCategory}/>
                <Link to= "/activities-new">Add new</Link>
            </div>
        )
    }
}
const mapStateToProps = state => ({ activities: state.activities })
export default connect(mapStateToProps)(CategoryPageComponent)