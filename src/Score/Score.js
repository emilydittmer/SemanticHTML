import React, { Component } from 'react';
import './Score.css';


export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0
    }
  }

  render() {
  
    return (
      <article>Score: {this.state.playerScore}</article>
    )
  
  }
}
