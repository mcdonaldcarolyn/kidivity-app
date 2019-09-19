import React, {Component} from 'react';
import './App.css';
import FormPageComponent from'./Components/FormPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';
import HomePageComponent from './container/HomePageComponent';
import CategoryPageComponent from './container/CategoryPageComponent';
import ActivitiesPageComponent from './Components/ActivitiesPageComponent';
import CategoriesPageComponent from './container/CategoryPageComponent';
import FormComponent from './Components/ActivityFormComponent';
export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={HomePageComponent}/>
          <Route exact path="/categories" component={CategoriesPageComponent} />
          <Route exact path="/categories/:id" component={FormPageComponent} />
          <Route exact path="/activities" component={ActivitiesPageComponent} />
          <Route exact path="/activities-new" component={FormPageComponent}/>
          <Route exact path="/activities/:id" component={FormPageComponent} />
        </Router>
      </div>
    );
  }
}


