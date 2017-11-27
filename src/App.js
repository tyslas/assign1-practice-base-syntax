import React, {Component} from 'react';
import './App.css';
import UserOutput from './userInOut/UserOutput'

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

  foodChangedHandler = (e => {
    this.setState({
      users: [
        {
          username: 'Kwon',
          food: e.target.value
        }, {
          username: 'Chunks',
          food: e.target.value
        }, {
          username: 'Neutral',
          food: e.target.value
        }
      ]
    })
  })

  render() {
    return (<div className="App">
      <div className="appHeader">
        <h1>Learning React on Udemy:</h1>
        <h3>Assignment 1: Time to Practice - The Base Syntax</h3>
      </div>
      <UserOutput username={this.state.users[0].username} />
      <UserOutput username={this.state.users[1].username} />
      <UserOutput username={this.state.users[2].username} />
    </div>);
  }
}

export default App;
