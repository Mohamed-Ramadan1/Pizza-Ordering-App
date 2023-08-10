import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from '../store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
