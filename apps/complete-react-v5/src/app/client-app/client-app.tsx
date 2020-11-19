import React from 'react';

import './client-app.scss';
import { hydrate } from 'react-dom';
import App from '../app';

hydrate(<App/>, document.getElementById('root'));

/* eslint-disable-next-line */
export interface ClientAppProps {}

export const ClientApp = (props: ClientAppProps) => {
  return (
    <div>
      <h1>Welcome to client-app component!</h1>
    </div>
  );
};

export default ClientApp;
