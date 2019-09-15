import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';

export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={ActivityPageComponent} />
        </Router>
      </div>
    );
  }
}


