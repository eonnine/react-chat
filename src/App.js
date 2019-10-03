import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/shared/Router';
import Header from './components/shared/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
};

export default App;