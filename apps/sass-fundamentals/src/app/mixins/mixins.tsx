import React from 'react';

import './mixins.scss';

/* eslint-disable-next-line */
export interface MixinsProps {}

export const Mixins = (props: any) => {
  return (
    <div>
      <h1>Mixins</h1>

      <p>
        <button className='btn btn-yellow'>Click Me!</button>
        <label>Yellow</label>
      </p>

      <p>
        <button className='btn btn-blue'>Click Me!</button>
        <label>Blue</label>
      </p>
      <p>
        <button className='btn btn-green'>Click Me!</button>
        <label>Green</label>
      </p>
      <p>
        <button className='btn btn-purple'>Click Me!</button>
        <label>Purple</label>
      </p>
      <p>
        <button className='btn btn-pink'>Click Me!</button>
        <label>Pink</label>
      </p>
      <p>
        <button className='btn btn-orange'>Click Me!</button>
        <label>Orange</label>
      </p>
      <p>
        <button className='btn btn-brown'>Click Me!</button>
        <label>Brown</label>
      </p>
    </div>
  );
};

export default Mixins;
