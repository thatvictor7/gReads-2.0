import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BookDisplay from './components/BookDisplay'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
      }
    }

  componentDidMount() {
    fetch('http://localhost:5000/gbooks')
    .then(res => res.json())
    .then(data => {
      return this.setState({gbookLib: data.gBooks})
      
    })
  }

  render() {
    return (
      <div>
      <Header />
      {this.state.gbookLib ? <BookDisplay library={this.state.gbookLib} /> : <LinearProgress />}
      </div>
    );
  }
}

export default App;
