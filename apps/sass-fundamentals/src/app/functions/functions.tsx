import React from 'react';

import './functions.scss';
import { RouteComponentProps } from '@reach/router';

/* eslint-disable-next-line */
export interface FunctionsProps extends RouteComponentProps{}

export const Functions = (props: FunctionsProps) => {
  return (
    <div className={'func'}>
      <h1>Functions - Color</h1>

      <p className='theme-1'>
        <span>Theme 1</span>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-other">Other</button>
        <button className="btn btn-other2">Other 2</button>
        <button className="btn btn-primary" disabled>Primary [d]</button>
        <button className="btn btn-secondary" disabled>Secondary [d]</button>
      </p>

      <p className='theme-2'>
        <span>Theme 2</span>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-other">Other</button>
        <button className="btn btn-other2">Other 2</button>
        <button className="btn btn-primary" disabled>Primary [d]</button>
        <button className="btn btn-secondary" disabled>Secondary [d]</button>
      </p>

      <p className='theme-3'>
        <span>Theme 3</span>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-other">Other</button>
        <button className="btn btn-other2">Other 2</button>
        <button className="btn btn-primary" disabled>Primary [d]</button>
        <button className="btn btn-secondary" disabled>Secondary [d]</button>
      </p>
    </div>
  );
};

export default Functions;
