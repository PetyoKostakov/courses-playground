import React, { lazy, useState, Suspense } from 'react';
import { Router, Link } from '@reach/router';

import './app.scss';

import SearchParams from './search-params/search-params';
import ThemeContext from './ThemeContext/ThemeContext';

const Details = lazy(() => import('./details/details'));

export const App = () => {
  const theme = useState('darkblue');

  console.log('App');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={ theme }>
        <div className="app">
          <Link to="/">
            <h1>Adopt me</h1>
          </Link>
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <SearchParams path="/"/>
              <Details path="/details/:id"/>
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
