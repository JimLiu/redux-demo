import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
//import { createBrowserHistory as createHistory } from 'history';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import routes from '../routes';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
