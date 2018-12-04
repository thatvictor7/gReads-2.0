import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BookDisplay from './components/BookDisplay'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <BookDisplay />
      </div>
    );
  }
}

export default App;
