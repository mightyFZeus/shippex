import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import appSlice from '../appSlice';

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
};

export const main = persistReducer(
  mainPersistConfig,
  combineReducers({
    app: appSlice,
  }),
);
