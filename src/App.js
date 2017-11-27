import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    users: [
      {
        username: 'Kwon',
        food: 'KBBQ'
      }, {
        username: 'Chunks',
        food: 'Viz-Danko'
      }, {
        username: 'Neutral',
        food: 'Matzah'
      }
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState({
      users: [
        {
          username: event.target.value,
          food: 'Maryland Crab Cakes'
        }, {
          username: 'Chunks',
          food: 'Viz-Danko'
        }, {
          username: 'Neutral',
          food: 'Matzah'
        }
      ]
    })
  }

  render() {
    return (<div className="App">
      <div className="appHeader">
        <h1>Learning React on Udemy:</h1>
        <h3>Assignment 1: Time to Practice - The Base Syntax</h3>
      </div>

      <UserInput
        changed={this.usernameChangedHandler} />
        
      <UserOutput
        username={this.state.users[0].username} food={this.state.users[0].food} />
      <UserOutput
        username={this.state.users[1].username}
        food={this.state.users[1].food} />
      <UserOutput
        username={this.state.users[2].username}
        food={this.state.users[2].food} />
    </div>);
  }
}

export default App;
