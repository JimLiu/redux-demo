import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import createReducer from '../lib/createReducer';


const initialState = Immutable.fromJS({
  loading: false, // if it's sending request to server
  errors: {}, // any error response
});


export default createReducer(initialState, {
  [ActionTypes.VIDEOS_LOADING](state, action) {
    return state.set('loading', true);
  },

  [ActionTypes.VIDEOS_LOAD_SUCCESS](state, action) {

    return state.withMutations(map => {
      map.set('loading', false).set('errors', {});
    });
  },

  [ActionTypes.VIDEOS_LOAD_FAILURE](state, action) {

    return state.withMutations(map => {
      map.set('loading', false)
        .set('errors', action.errors);
    });
  },

});