import React from 'react';

import './variables.scss';

/* eslint-disable-next-line */
export interface VariablesProps {}

export const Variables = (props: any) => {
  return (
    <div>
      <h1>Beautiful Buttons</h1>
      <p>
        <button className='btn btn-primary'>Click Me!</button>
        <label>Primary</label>
      </p>

      <p>
        <button className='btn btn-secondary'>Click Me!</button>
        <label>Secondary</label>
      </p>

      <p>
        <button className='btn btn-primary' disabled>Click Me!</button>
        <label>Primary Disabled</label>
      </p>

      <p>
        <button className='btn btn-secondary' disabled>Click Me!</button>
        <label>Secondary Disabled</label>
      </p>
    </div>
  );
};

export default Variables;
