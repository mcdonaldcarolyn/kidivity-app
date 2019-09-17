import React, {Component} from 'react';
import './App.css';
import FormPageComponent from'./Components/FormPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';
import HomePageComponent from './Components/HomePageComponent';
import ListPageComponent from './Components/ListPageComponent';
import ActivitiesPageComponent from './Components/ActivitiesPageComponent';
import ListsPageComponent from './Components/ListPageComponent';
import FormComponent from './Components/FormComponent';
export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={HomePageComponent}/>
          <Route exact path="/lists/:id" component={FormPageComponent} />
          

          
                                                                   
          
          <Route exact path="/lists" component={ListsPageComponent} />
          <Route exact path="/activities/new" component={FormPageComponent}/>
          
          <Route exact path="/lists/:id" component={ListPageComponent} />

          
          <Route exact path="/activities" component={ActivitiesPageComponent} />

          // show page for one specific activity; edit the values here; assign to lists
          <Route exact path="/activities/:id" component={FormPageComponent} />

        </Router>
      </div>
    );
  }
}


