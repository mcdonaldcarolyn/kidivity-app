import React, {Component} from 'react';
import ActivityFormComponent from "../Components/ActivityFormComponent"
import ActivityListComponent from '../Components/ActivityListComponent';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addModels } from "../actions/listActions";

export class FormPageComponent extends Component {

    addActivity = activity => {
        this.props.addActivity(activity);
    };

    render() {
        const { id } = this.props.match.params;

        return (
            <div>
                <ActivityListComponent category={id} activities={this.props.activities}/>
                <hr></hr>
                <ActivityFormComponent addActivity={this.addActivity}/>
                <a href="/"> Back to Home </a>
            </div>
        )
    }
}

const mapStateToProps = state => ({ activities: state.activities });

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addActivity }, dispatch);
// }

export default connect(
  mapStateToProps,
  {addModels}
)(FormPageComponent);
