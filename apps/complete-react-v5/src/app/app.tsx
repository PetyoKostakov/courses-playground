import React, { useState } from 'react';
import { Router, Link } from '@reach/router';

import './app.scss';

import Pet from './pet/pet';
import SearchParams from './search-params/search-params';
import Details from './details/details';
import ThemeContext from './ThemeContext/ThemeContext';


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
          <Router>
            <SearchParams path="/"/>
            <Details path="/details/:id"/>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
