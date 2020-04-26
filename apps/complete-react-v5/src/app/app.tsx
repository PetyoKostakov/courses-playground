import React from 'react';

import './app.scss';

import Pet from './pet/pet';
import SearchParams from './search-params/search-params';

export const App = () => {
  console.log('app.tsx');
  return (
    <div className="app">
      <h1>Adopt me</h1>
      <SearchParams/>
      <Pet name="Taira" animal="Dog" breed="Golden Retriever"/>
    </div>
  );
};

export default App;
