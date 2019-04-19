import React, { Component } from 'react';
import logo from './OeufsDePape.jpg'


class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt='Oeufs de Pape'style={{width:'100%'}}/>
      </div>
    );
  }
}

export default App;
