import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card.js';
import Score from '../Score/Score.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://gist.githubusercontent.com/emilydittmer/50847a91c25638e102877bbab1a7782e/raw/9e4712554e25c6ff5fc917db15cb3b162ce80c93/dataset.md')
      .then(response => response.json()) 
      .then(json => {
          this.setState({		    
            allCards: json,
            isLoading: false
        });
      })
      .catch(error => console.log('Card Upload', error));
  }

  increaseScore() {
    console.log("Increase Score", "hi")
  }

  render() {

  return (
      <div className="startScreen">
        <header>
          <h1>Learn Semantic HTML</h1>
          <Score />
          {this.state.isLoading === true && 
            <h5>Loading...</h5>}
        </header>
        <Card 
        allCards = {this.state.allCards}
        />
      </div>
    );
  }
}
