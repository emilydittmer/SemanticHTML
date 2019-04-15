import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      isLoading: false,
      playerScore: 0
    }
  }
  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/emilydittmer-semanitic-html/semantichtml')
      .then(response => response.json()) 
      .then(json => {
          this.setState({		    
            allCards: json.semanticHTML,
            isLoading: false
        });
      })
      .catch(error => console.log('Card Upload', error));
  }

  increaseScore = () => {
    this.setState({playerScore: this.state.playerScore + 1})
  }

  render() {

  return (
      <main className="startScreen">
        <header>
          <h1>Learn Semantic HTML</h1>
          <h2>Score: {this.state.playerScore}</h2>
          {this.state.isLoading === true && 
            <h5>Loading...</h5>}
        </header>
        <Card 
        allCards = {this.state.allCards}
        increaseScore = {this.increaseScore}
        />
      </main>
    );
  }
}
