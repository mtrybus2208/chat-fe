import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const saveSubsetFilter = createFilter('auth', ['user']);
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  transforms: [saveSubsetFilter],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const enhancers = composeWithDevTools(applyMiddleware(thunk));
const defaultState = {};

const store = createStore(pReducer, defaultState, enhancers);
export const persistor = persistStore(store);

export default store;
