import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/skeleton.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import SearchBox from './components/SearchBox';
import VideoPlayer from './components/VideoPlayer';


const store = configureStore();
registerServiceWorker();

class App extends Component {

  constructor(props){
    super(props);
  }

  playVideo = (videoId) => {
    let src = `https://www.youtube.com/embed/${videoId}`;
    console.log('videoPlayer', this.videoPlayer);
    this.videoPlayer.setAttribute('src', src);
  }

  render() {
    return (
      <div className="App row">
        <Header className="twelve columns" text="Youtube Search List" />
        <div className="five columns main-container">
        <Provider store={store}>
          <SearchBox playVideo={this.playVideo} />
        </Provider>
        </div>
        <div className="six columns main-container">
        <iframe className="videoPlayer"
        src='https://www.youtube.com/embed/tgbNymZ7vqY' ref={(el) => { this.videoPlayer = el; console.log('ellll', el) }} />  </div>
      </div>
    );
  }
}

export default App;
