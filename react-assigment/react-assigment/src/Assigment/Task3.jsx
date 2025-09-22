import React, { Component } from 'react';


class Task3 extends Component {
  //Create a class component WelcomeMessage that displays "Welcome to React!" and a 
//render() method. 

  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to React!'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Task3;