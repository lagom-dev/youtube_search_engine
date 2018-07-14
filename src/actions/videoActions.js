import * as types from './actionTypes';
const apiKey = 'AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg';
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=5&key='+apiKey+'&q=';
function url(_keyWord, _newPage) {
    /* AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg */
  return youtubeUrl + _keyWord + '&page=' + _newPage;
}

export function receiveVideo(json) {
    console.log(json.items);
  return {type: types.RECEIVE_VIDEO, video: json.items, page:14};
}

export function fetchVideos(_keyWord, _newPage) {
  return dispatch => {
    return fetch(url(_keyWord, _newPage), {
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