import { RECEIVE_SONG, RECEIVE_PLAY, RECEIVE_PAUSE } from '../actions/music_actions';

const defaultState = {
  id: 0,
  title: "",
  artists: [],
  position: 0,
  media_url: "",
  album_cover_url: "",
  playing: false
};

const playState = {
  playing: true
};

const pauseState = {
  playing: false
};

function currentTrackReducer(state = defaultState, action) {
  switch(action.type) {
    case RECEIVE_SONG:
      return Object.assign( {}, state, action.song, playState);
    case RECEIVE_PLAY:
      return Object.assign( {}, state, playState );
    case RECEIVE_PAUSE:
      return Object.assign( {}, state, pauseState );
    default:
      return state;
  }
}

export default currentTrackReducer;