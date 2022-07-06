import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});