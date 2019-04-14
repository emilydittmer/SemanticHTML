import React, { Component } from 'react';
import './Card.css';

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
  } else {
    this.setState = {
      incorrectCards: this.state.incorrectCards.push(this.state.shownCard)
    }
    console.log(this.state.incorrectCards)
  }
}


  render() {
    let toggleStart;
    if(this.state.activeGame === false) {
      toggleStart = <input type="button" className="startBtn" onClick={this.startGame} value="Start" />
    } else {
      this.state.randomCards.pop()
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