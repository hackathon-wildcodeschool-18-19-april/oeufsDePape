import React, { Component } from 'react';
import logo from './OeufsDePape.jpg'
import Game from './Game'


class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt='Oeufs de Pape'style={{width:'100%'}}/>
        <Game />
      </div>
    );
  }
}

export default App;
