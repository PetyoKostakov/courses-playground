import React from 'react';

import './app.scss';
import Nesting from './nesting/nesting';
import Parent from './parent/parent';
import { Router } from '@reach/router';
import Variables from './variables/variables';

export const App = () => {

  return (
    <div>
      <Router>
        <Parent path={'/parent'}/>
        <Nesting path={'/nesting'}/>
        <Variables path={'/variables'}/>
      </Router>
    </div>
  );
};

export default App;
