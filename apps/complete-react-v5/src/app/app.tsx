import React from 'react';
import { Router, Link } from '@reach/router';

import './app.scss';

import Pet from './pet/pet';
import SearchParams from './search-params/search-params';
import Details from './details/details';

export const App = () => {
  console.log('app.tsx');
  return (
    <div className="app">
      <Link to="/">
        <h1>Adopt me</h1>
      </Link>
      <Router>
        <SearchParams path="/"/>
        <Details path="/details/:id"/>
      </Router>
    </div>
  );
};

export default App;
