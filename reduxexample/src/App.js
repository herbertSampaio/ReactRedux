import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Tweet from './components/tweet';
import TweetForm from './components/tweetForm';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TweetForm/>
        <Tweet />
      </div>
      </Provider>
    );
  }
}

export default App;
