import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/shared/Router';
import Header from './components/shared/Header';
import Store from './components/shared/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  )
};

export default App;