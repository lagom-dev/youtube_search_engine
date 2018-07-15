import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/skeleton.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import SearchBox from './components/SearchBox';


const store = configureStore();
registerServiceWorker();

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header text="Youtube Search List" />
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </div>
    );
  }
}

export default App;
