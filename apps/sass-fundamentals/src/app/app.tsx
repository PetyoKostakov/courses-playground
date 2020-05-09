import React from 'react';

import './app.scss';
import Nesting from './nesting/nesting';
import Parent from './parent/parent';
import { Router } from '@reach/router';

export const App = () => {

  return (
    <div>
      <Router>
        <Parent path={'/parent'}/>
        <Nesting path={'/nesting'}/>
      </Router>
    </div>
  );
};

export default App;
