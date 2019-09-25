import React, {Component} from 'react';
import './App.css';
import FormPageComponent from'./container/FormPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';
import HomePageComponent from './container/HomePageComponent';
import CategoryPageComponent from './container/CategoryPageComponent';
import ActivitiesPageComponent from './container/ActivitiesPageComponent';
import CategoriesPageComponent from './container/CategoryPageComponent';
import ActivityPageComponent from './container/ActivityPageComponent';
export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={HomePageComponent}/>
          <Route exact path="/categories" component={CategoriesPageComponent} />
          <Route  path="/categories/:slug" component={CategoryPageComponent} />
          <Route exact path="/activities" component={ActivitiesPageComponent} />
          <Route exact path="/activities-new" component={FormPageComponent}/>
          <Route  path="/activities/:id" component={ActivityPageComponent} />
        </Router>
      </div>
    );
  }
}


