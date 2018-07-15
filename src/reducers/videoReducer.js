import initialState from './initialState';
import { FETCH_VIDEO, RECEIVE_VIDEO, RECEIVE_PAGINATED_VIDEO } from '../actions/actionTypes';

export default function video(state = initialState.video, action) {
  let newState;
  switch (action.type) {
    case FETCH_VIDEO:
      console.log('FETCH_VIDEO Action')
      return action;
    case RECEIVE_VIDEO:
      console.log('***INItIAL state ', state);
      newState = { video: action.video, nextPageToken: action.nextPageToken };
      console.log('RECEIVE_VIDEO Action')
      return newState;

    case RECEIVE_PAGINATED_VIDEO:
      console.log('***INItIAL state ', state);
      let prevVideos = state.video || [];
      newState = { video: prevVideos.concat(action.video), nextPageToken: action.nextPageToken };
      console.log('RECEIVE_PAGINATED_VIDEO Action')
      return newState;

    default:
      return state;
  }
}