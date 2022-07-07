import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
export const store = configureStore({
  reducer: {
    router: connectRouter(history)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});