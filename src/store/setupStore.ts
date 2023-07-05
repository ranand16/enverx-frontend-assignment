import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

function setupStore(initialState = {}) {
  // Middleware
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(...[sagaMiddleware]);
  const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const realMiddleware = composeEnhancers(middleware);
  // Store
  const store = createStore(rootReducer, initialState, realMiddleware);

  // Sagas
  sagaMiddleware.run(rootSaga);

  return store;
}

// export type AppState = ReturnType<typeof rootReducer>;

export default setupStore;
