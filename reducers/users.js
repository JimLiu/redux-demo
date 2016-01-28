import _ from 'lodash';
import Immutable from 'immutable'
import { combineReducers } from 'redux';
import * as ActionTypes from '../ActionTypes';
import UserRecord from '../records/user';
import createReducer from '../lib/createReducer';


const initialState = Immutable.Map();

export default createReducer(initialState, {

  [ActionTypes.VIDEOS_LOAD_SUCCESS](state, action) {
    const { users } = action;

    return state.withMutations(map => {
      _.forEach(users, (user) => {
        map.set(user.id, new UserRecord(user))
      })
    });
  },
});