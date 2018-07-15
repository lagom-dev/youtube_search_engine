import * as types from './actionTypes';
const apiKey = 'AIzaSyA9fqjYUNrgEifwlJudzENDYYeicsFJMHg';
const youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=5&key=' + apiKey + '&q=';

function url(_query, _nextPageToken) {
  let pageToken = _nextPageToken || '';
  return youtubeUrl + _query + '&pageToken=' + pageToken;
}

export function receiveVideo(_json, type) {
  //console.log('nextPageToken', json.nextPageToken);
  return { type, video: _json.items, nextPageToken: _json.nextPageToken, };
}

export function fetchVideos(_keyWord, _nextPageToken, _isPagination) {
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
      .then(
        (json) => {
          if (_isPagination) {
            dispatch(receiveVideo(json, types.RECEIVE_PAGINATED_VIDEO));
          } else {
            dispatch(receiveVideo(json, types.RECEIVE_VIDEO));
          }
        }
      );
  };
}