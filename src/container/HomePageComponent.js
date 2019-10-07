import React, { Component } from "react";
import CategoryListComponent from "../Components/CategoryListComponent";
import background from '../images/background.png'
import { connect } from "react-redux";

export class HomePageComponent extends Component {
  render() {
    const headerstyle = {
      color: "blue",
      textAlign: 'center',
      fontFamily: "Bradley Hand, cursive"
    };
    const sectionStyle = {
      width: '100%',
      height: '400px',
      backgroundImage: "url("+ {background} + ")"

    }

    return (
      <div style={sectionStyle}>
        <h2 style ={headerstyle}>Welcome to Kidivity</h2>
        <h4> Where you can create a master list of Kid
       acivities!</h4>
        <CategoryListComponent categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(HomePageComponent);
