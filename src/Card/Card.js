import React, { Component } from 'react';
import './Card.scss';
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

  render() {
    let toggleStart;
    let checkLocalStorage = JSON.parse(localStorage.getItem('allIncorrectCards'));
    if(this.state.activeGame === false && checkLocalStorage === null) {
      toggleStart = 
        <section className="start">
          <input type="button" className="startBtn" onClick={this.startGame} value="Start" /> 
        </section>
    } else if (this.state.activeGame === false && checkLocalStorage.length > 0){
      toggleStart = 
      <section className="start">
        <input type="button" className="startBtn" onClick={this.startGame} value="Start" />
        <IncorrectCards 
          incorrectCards = {this.incorrectCards} 
          checkAnswer/>
      </section>
    } else if (this.state.activeGame){
      toggleStart =
        <section className="activeGame">
          <h3>{this.state.shownCard.prompt}</h3>
          <div className="allCardBtns">
            <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[0]} onClick={this.checkAnswer}/>
            <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[1]} onClick={this.checkAnswer}/>
            <input type="button" className="cardBtns" value={this.state.shownCard.possibleChoices[2]} onClick={this.checkAnswer}/>
          </div>
        </section> 
    }
    return (
      <section className="eachCard">
        {toggleStart} 
      </section>
    );
  }
}