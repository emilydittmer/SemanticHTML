import React, { Component } from 'react';
import './Card.css';
import IncorrectCards from '../IncorrectCards/IncorrectCards.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCards: [],
      activeGame: false,
      shownCard: {},
      incorrectCards: []
    }
  }

startGame = () => {
  let randomizeCards = this.props.allCards.sort(() => .5 - Math.random());
  this.setState(
    {randomCards: randomizeCards,
    activeGame: true,
    shownCard: randomizeCards.pop(),
    }
  )
}

checkAnswer = (event) => {
  if(event.target.value === this.state.shownCard.correctAnswer) {
    this.props.increaseScore();
    this.displayNextCard();
  } else {
    let wrongAnswer = [];
    wrongAnswer = this.state.incorrectCards.concat(this.state.shownCard);
    this.setState(
      {incorrectCards: wrongAnswer}
      ,() => localStorage.setItem('allIncorrectCards', JSON.stringify(this.state.incorrectCards))
    )
    this.displayNextCard();
  }
}

displayNextCard = (props) => {
  this.setState(
    { randomCards: this.state.randomCards, 
      shownCard: this.state.randomCards.pop(),
    }
  )
}
displayNextCard = (props) => {
  this.setState(
    { randomCards: this.state.randomCards, 
      shownCard: this.state.randomCards.pop(),
    }
  )
}

  render() {
    let toggleStart;
    if(this.state.activeGame === false) {
      toggleStart = 
        <section className="start">
        <input type="button" className="startBtn" onClick={this.startGame} value="Start" />
        <IncorrectCards 
          incorrectCards = {this.incorrectCards} 
          checkAnswer/>
        </section>
    } else {
      toggleStart =
        <div>
          <h3>{this.state.shownCard.prompt}</h3>
          <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[0]} onClick={this.checkAnswer}/>
          <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[1]} onClick={this.checkAnswer}/>
          <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[2]} onClick={this.checkAnswer}/>
        </div> 
    }
    return (
      <section className="eachCard">
        {toggleStart} 
      </section>
    );
  }
}