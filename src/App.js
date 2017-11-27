import React, { Component } from 'react';
import './App.css';
import UserOutput from './userInOut/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <h1>Learning React on Udemy:</h1>
          <h3>Assignment 1: Time to Practice - The Base Syntax</h3>
        </div>
        <UserOutput
          username='Kwon'
        />
        <UserOutput
          username='Chunks'
        />
        <UserOutput
          username='Neutral'
        />
      </div>
    );
  }
}

export default App;
