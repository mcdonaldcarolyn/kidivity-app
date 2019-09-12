import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {
  render(){
  return (
    <div className='App'>
      
         <h1> Welcome to Kidivity</h1>

        <ActivityPageComponent/>
    </div>
  );
  }
}


