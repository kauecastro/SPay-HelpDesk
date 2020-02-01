import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HomeContainer from './components/HomeContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HomeContainer />;
  }
}

export default hot(App);
