import * as types from './actionTypes';
const apiKey = 'AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg';
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=5&key='+apiKey+'&q=';
function url(_query, _nextPageToken) {
    /* AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg */
  let pageToken = _nextPageToken || '';
  return youtubeUrl + _query + '&pageToken=' + pageToken;
}

export function receiveVideo(json) {
    console.log('nextPageToken', json.nextPageToken);
  return {type: types.RECEIVE_VIDEO, video: json.items, nextPageToken: json.nextPageToken, };
}

export function fetchVideos(_keyWord, _nextPageToken) {
  return dispatch => {
    return fetch(url(_keyWord, _nextPageToken), {
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