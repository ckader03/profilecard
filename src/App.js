import React, { Component } from 'react';
import './App.css';
import ProfileCard from './ProfileCard'
import squad from './squad.js'
export default class App extends Component {
render() {
  return (
    <div>
      <ProfileCard list={this.props.squad}/>
    </div>
  );
 }
}

App.defaultProps = {
  squad: squad,
};