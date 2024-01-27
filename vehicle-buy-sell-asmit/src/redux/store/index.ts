import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistedReducer from '../reducers';
import { thunk } from 'redux-thunk';

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { persistor, store };
