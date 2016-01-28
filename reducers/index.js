import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import videos from './videos';
import users from './users';
import status from './status';

const rootReducer = combineReducers({
  router,
  videos,
  users,
  status
});

export default rootReducer;
