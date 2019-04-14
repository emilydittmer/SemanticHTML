import React, { Component } from 'react';
import './IncorrectCards.scss';
import Card from '../Card/Card.js';

export default class IncorrectCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleIncorrect: false
    }
  }



  useIncorrectCards = (props) => {
    this.setState(
      {toggleIncorrect: true}
    )
  }

  render() {
    let allIncorrectCards;
    if(this.state.toggleIncorrect === true) {
      allIncorrectCards = JSON.parse(localStorage.getItem('allIncorrectCards')).map(card => {
        return <div>
          <h3>{card.prompt}</h3>
          <input type="button" className="cardBtns" value={card.possibleChoices[0]} />
          <input type="button" className="cardBtns" value={card.possibleChoices[1]} />
          <input type="button" className="cardBtns" value={card.possibleChoices[2]} />
        </div>
      })
    }
    return (
      <section>
        <input type="button" value="Practice Cards Previously Answered Incorrectly" onClick={this.useIncorrectCards}/>
        {allIncorrectCards}
      </section>
    );
  }
}