import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCard: []
    }
  }

startGame = () => {
  let randomizeCard = this.props.allCards.sort(() => .5 - Math.random());
  this.setState = {
    randomCard: this.state.randomCard.push(randomizeCard)
  }
console.log(this.state.randomCard);
}
///On click, card renders with prompt and possible answers in button
  render(props) {

    return (
      <section className="eachCard">
        <input type="button" className="startBtn" onClick={this.startGame} value="Start" />
      </section>
    );
  }
}