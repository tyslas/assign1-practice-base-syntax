import React, { Component } from 'react';
import './App.css';
import UserOutput from './userInOut/UserOutput'

class App extends Component {
  state = {
    users: [
      {username: 'Kwon'},
      {username: 'Chunks'},
      {username: 'Neutral'}
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <h1>Learning React on Udemy:</h1>
          <h3>Assignment 1: Time to Practice - The Base Syntax</h3>
        </div>
        <UserOutput
          username={this.state.users[0].username}
        />
        <UserOutput
          username={this.state.users[1].username}
        />
        <UserOutput
          username={this.state.users[2].username}
        />
      </div>
    );
  }
}

export default App;
