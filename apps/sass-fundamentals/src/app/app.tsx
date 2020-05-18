import React from 'react';

import './app.scss';
import Nesting from './nesting/nesting';
import Parent from './parent/parent';
import { Router } from '@reach/router';
import Variables from './variables/variables';
import Mixins from './mixins/mixins';
import Nudging from './nudging/nudging';
import Bem from './bem/bem';
import Functions from './functions/functions';

export const App = () => {

  return (
    <div>
      <Router>
        <Parent path={'/parent'}/>
        <Nesting path={'/nesting'}/>
        <Variables path={'/variables'}/>
        <Mixins path={'/mixins'}/>
        <Nudging path={'/nudging'}/>
        <Bem path={'/bem'}/>
        <Functions path={'func'}/>
      </Router>
    </div>
  );
};

export default App;
