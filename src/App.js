import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Videolist from './components/VideoList';
import SearchBox from './components/SearchBox';

const store = configureStore();
registerServiceWorker();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
          <SearchBox />
        </Provider>
        <Provider store={store}>
          <Videolist />
        </Provider>
      </div>
    );
  }
}

export default App;
