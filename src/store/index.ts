import { compose, createStore } from 'redux';

import { FavoriteReducer } from './favoriteReducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(FavoriteReducer, composeEnhancers());

export default store;
