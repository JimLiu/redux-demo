import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import Immutable from 'immutable'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger({
        stateTransformer: (state) => {
          var newState = {};
          for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
              newState[i] = state[i].toJS();
            } else {
              newState[i] = state[i];
            }
          };
          return newState;
        }
      }))
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
