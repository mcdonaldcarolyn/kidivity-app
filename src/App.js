import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageComponent from './Components/HomePageComponent';


export default class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component={HomePageComponent} />
        <Route path='/activities' component={ActivityPageComponent}/>
      </Router>
    );
  }
}


