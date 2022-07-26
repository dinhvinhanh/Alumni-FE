import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {  store } from './store';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import theme from 'theme';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <HelmetProvider>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <App/>
            </StyledEngineProvider>
          </ThemeProvider>
      </HelmetProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
