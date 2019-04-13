import React, { Component } from 'react';
import './App.css';
import Dataset from '../Dataset.js';
import Card from '../Card/Card.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: []
    }
  }
  // componentDidMount() {
  //   fetch('')
  //     .then(response => response.json()) 
  //     .then(displayCards => {
  //         this.setState({		    
  //           allCards: displayCards.card 
  //       });
  //     })
  //     .catch(error => console.log('Card Upload', error));


  render() {
    let Questions = Dataset.emilySemanticHTML.map(question => {
      this.state.allCards.push(question)
      console.log(this.state.allCards);
    })

  return (
      <div className="startScreen">
        <Card 
        allCards = {this.state.allCards}
        />
        {Questions}
      </div>
    );
  }
}
