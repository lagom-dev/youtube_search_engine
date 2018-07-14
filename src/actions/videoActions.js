import * as types from './actionTypes';
const apiKey = 'AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg';
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=5&key='+apiKey+'&q=';
function url(_keyWord) {
    /* AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg */
  return youtubeUrl + _keyWord;
}

export function receiveVideo(json) {
    console.log(json.items);
  return {type: types.RECEIVE_VIDEO, video: json.items};
}

export function fetchVideos(_keyWord) {
  return dispatch => {
    return fetch(url(_keyWord), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveVideo(json)));
  };
}