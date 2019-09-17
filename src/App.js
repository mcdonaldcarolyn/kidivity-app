import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuComponent from './Components/MenuComoponent';
import HomePageComponent from './Components/HomePageComponent';
import ListPageComponent from './Componets/ListPageComponent';
export default class App extends Component {
  render(){
    return (
      <div>
        <MenuComponent />
        <Router>
          <Route exact path="/" component={HomePageComponent}/>
          <Route exact path="/lists/:id" component={ActivityPageComponent} />
          

          // home page just has generic copy stuff with links to /lists and /activities
          
          
          // two components: one to show all the lists; optionally a form to create new list
          <Route exact path="/lists" component={ListsPageComponent} />

          // one specific list, name at top, activities listed; form to add a new activity to list
          <Route exact path="/lists/:id" component={ListPageComponent} />

          // shows ALL activities; form to add new activity
          <Route exact path="/activities" component={ActivitiesPageComponent} />

          // show page for one specific activity; edit the values here; assign to lists
          <Route exact path="/activities/:id" component={ActivityPageComponent} />

        </Router>
      </div>
    );
  }
}


