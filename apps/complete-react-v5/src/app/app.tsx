import React from 'react';

import './app.scss';

import Pet from './pet/pet';

export const App = () => {
  return (
    <div className="app">
      <h1>Adopt me</h1>
      <Pet name="Taira" animal="Dog" breed="Golden Retriever"/>
    </div>
  );
};

export default App;
