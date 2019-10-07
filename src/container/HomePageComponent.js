import React, { Component } from "react";
import CategoryListComponent from "../Components/CategoryListComponent";
import background from '../image/background_image.png'
import { connect } from "react-redux";

export class HomePageComponent extends Component {
  render() {
    const headerstyle = {
      color: "black",
      textAlign: 'center',
      fontFamily: "Bradley Hand, cursive"
    };
    const menuStyle = {
      color: "black",
      textAlign: "right",
      fontFamily: "Times New Roman"
    }
    const sectionStyle = {
      backgroundImage: "url(" + "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" +")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
      

    }

    return (
      <div style={sectionStyle}>
        <h2 style ={headerstyle}>Welcome to Kidivity</h2>
        <h4 style={menuStyle}> Where you can create a master list of Kid
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
