import React from 'react';

import './nudging.scss';
import { RouteComponentProps } from '@reach/router';

/* eslint-disable-next-line */
export interface NudgingProps extends RouteComponentProps {}

export const Nudging = (props: NudgingProps) => {
  return (
    <div>
      <h1>Welcome to nudging component!</h1>
    </div>
  );
};

export default Nudging;
