import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface appState {
  isLoggedIn: boolean;
  markAll?: boolean;
}

const initialState: appState = {
  isLoggedIn: false,
  markAll: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleIsLoggedIn: (state: appState, {payload}: PayloadAction<boolean>) => {
      state.isLoggedIn = payload;
    },
    toggleIsMarkAll: (state: appState, {payload}: PayloadAction<boolean>) => {
      state.markAll = payload;
    },
  },
});

export const {toggleIsLoggedIn, toggleIsMarkAll} = appSlice.actions;

export default appSlice.reducer;
