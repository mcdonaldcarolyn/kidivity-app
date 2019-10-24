import React, {Component} from 'react';
import ActivityFormComponent from "../components/ActivityFormComponent"
import ActivityListComponent from '../components/ActivityListComponent';
import { addActivity } from "../actions/listActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


export class FormPageComponent extends Component {

    

    render() {
        const sectionStyle = {
            backgroundImage:
                "url(https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            width: "1500px"
        };
        const { id } = this.props.match.params;

        return (
            <div style={sectionStyle}>
                <ActivityListComponent category={id} activities={this.props.activities}/>
                <hr></hr>
                <ActivityFormComponent addActivity={this.props.addActivity} categories={this.props.categories}/>
                <a href="/"> Back to Home </a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        activities: state.manageActivities.activities,
         categories: state.manageCategories.categories
    }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addActivity }, dispatch);
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FormPageComponent);
