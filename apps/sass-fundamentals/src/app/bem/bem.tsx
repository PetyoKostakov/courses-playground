import React from 'react';

import './bem.scss';
import { RouteComponentProps } from '@reach/router';

/* eslint-disable-next-line */
export interface BemProps extends RouteComponentProps {}

export const Bem = (props: BemProps) => {
  return (
    <div className={'bem'}>
      <h1>BEM Buttons</h1>
      <p>
        <button className='btn btn--mode-primary'>
          Buy now! <span className="btn__price">$1.00</span>
        </button>
        <label>Primary</label>
      </p>

      <p>
        <button className='btn btn--mode-secondary'>
          Buy now! <span className="btn__price">$1.00</span>
        </button>
        <label>Secondary</label>
      </p>

      <p>
        <button className='btn btn--mode-primary' disabled>
          Buy now! <span className="btn__price">$1.00</span>
        </button>
        <label>Primary Disabled</label>
      </p>

      <p>
        <button className='btn btn--mode-secondary' disabled>
          Buy now! <span className="btn__price">$1.00</span>
        </button>
        <label>Secondary Disabled</label>
      </p>
    </div>
  );
};

export default Bem;
