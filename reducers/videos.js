import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import VideoRecord from '../records/video';
import createReducer from '../lib/createReducer';


const initialState = Immutable.OrderedMap();

export default createReducer(initialState, {

  [ActionTypes.VIDEOS_LOAD_SUCCESS](state, action) {
    const { videos } = action;

    return state.withMutations(map => {
      _.forEach(videos, (video) => {
        map.set(video.id, new VideoRecord(video))
      })
    });
  },
});