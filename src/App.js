import React, { Component } from 'react';
import './css/skeleton.css';
import './css/App.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import SearchList from './containers/SearchList';
import {YOUTUBE_EMBED_URL} from './constants.js';


const store = configureStore();
registerServiceWorker();

class App extends Component {

  playVideo = (videoId) => {
    let src = YOUTUBE_EMBED_URL + videoId;
    this.videoPlayer.setAttribute('src', src);
  }

  render() {
    return (
      <div className="App row">
        <Header className="twelve columns" headerText="Youtube Search List and Player" />
        <div className="content">
          <div className="five columns main-container">
            <Provider store={store}>
              <SearchList playVideo={this.playVideo} />
            </Provider>
          </div>
          <div className="seven columns main-container">
            <iframe className="video-player" title="Youtube Player"
              src={`${YOUTUBE_EMBED_URL}tgbNymZ7vqY`} ref={(el) => { this.videoPlayer = el; }} />  </div>
        </div>
      </div>
    );
  }
}

export default App;
