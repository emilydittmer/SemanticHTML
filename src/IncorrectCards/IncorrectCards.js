import React, { Component } from 'react';
import './IncorrectCards.scss';
import Card from '../Card/Card.js';

export default class IncorrectCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIncorrect: false,
      answeredIncorrectCards: [],
      eachIncorrectCard: {}
    }
  }
  useIncorrectCards = () => {
    let storageIncorrectCards = JSON.parse(localStorage.getItem('allIncorrectCards'));
    this.setState(
      {toggleIncorrect: true,
      answeredIncorrectCards: storageIncorrectCards},
      ()=> this.setState({eachIncorrectCard: storageIncorrectCards.pop()}))
  }

  render() {
    let toggleIncorrectCards;
    if (this.state.toggleIncorrect === false) {
      toggleIncorrectCards =
      <section className="playIncorrectCards">
        <input type="button" className="incorrectStartBtn" value="Practice Cards Previously Answered Incorrectly" onClick={this.useIncorrectCards}/>
      </section>
    } else {
      console.log('ELSE STATE',this.state);
      toggleIncorrectCards =
      <div>
        <h3>{this.state.eachIncorrectCard.prompt}</h3>
        <div className="btnHolder">
          <input type="button" className="cardBtns" value={this.state.eachIncorrectCard.possibleChoices}/>
          <input type="button" className="cardBtns" value={this.state.eachIncorrectCard.possibleChoices} />
        </div>
      </div>
      }
    return (
      <section>
        {toggleIncorrectCards}
      </section>
    )
  }
}