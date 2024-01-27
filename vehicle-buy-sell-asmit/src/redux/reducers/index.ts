import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { stationReducer } from './station-reducer';
import { modalReducer } from './modal.reducer';
import { loginReducer } from './auth.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducers = combineReducers({
  stationData: stationReducer,
  modalData: modalReducer,
  loginData: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default persistedReducer;
