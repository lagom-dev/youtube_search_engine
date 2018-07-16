import React, { Component } from 'react';
import './css/skeleton.css';
import './css/App.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import SearchList from './containers/SearchList';


const store = configureStore();
registerServiceWorker();

class App extends Component {

  constructor(props) {
    super(props);
  }

  playVideo = (videoId) => {
    let src = `https://www.youtube.com/embed/${videoId}`;
    this.videoPlayer.setAttribute('src', src);
  }

  render() {
    return (
      <div className="App row">
        <Header className="twelve columns" text="Youtube Search List and Player" />
        <div class="content">
          <div className="five columns main-container">
            <Provider store={store}>
              <SearchList playVideo={this.playVideo} />
            </Provider>
          </div>
          <div className="seven columns main-container">
            <iframe className="video-player"
              src='https://www.youtube.com/embed/tgbNymZ7vqY' ref={(el) => { this.videoPlayer = el; }} />  </div>
        </div>
      </div>
    );
  }
}

export default App;
