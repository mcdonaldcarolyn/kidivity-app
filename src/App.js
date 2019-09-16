import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';
import HomePageComponent from './Components/HomePageComponent';
import FormComponent from './Components/FormComponent';
export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={ActivityPageComponent} />
          <Route exact path="/home" component={HomePageComponent}/>
          <Route exact path="/new" component={FormComponent}/>
        </Router>
      </div>
    );
  }
}


