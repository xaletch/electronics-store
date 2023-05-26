import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux'

import './scss/index.scss';
import reportWebVitals from './reportWebVitals';

import './18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  </Provider>
);
reportWebVitals();
