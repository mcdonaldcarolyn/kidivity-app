import React, {Component} from 'react';
import './App.css';
import ActivityPageComponent from'./Components/ActivityPageComponent';
export default class App extends Component {
  render(){
  return (
    <div className='App'>
      
          Welcome to kidivity
        <ActivityPageComponent/>
    </div>
  );
  }
}


