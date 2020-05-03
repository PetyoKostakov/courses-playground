import React from 'react';

import './pet.scss';
import { RouteComponentProps } from '@reach/router';

/* eslint-disable-next-line */
export interface PetProps extends  RouteComponentProps {
  name: string;
  animal: string;
  breed: string;

  to: string;
}

export const Pet = (props: PetProps) => {
  console.log('pet.tsx');
  return (
    <div>
      <h1>{ props.name }</h1>
      <h2>{ props.animal }</h2>
      <h2>{ props.breed }</h2>
    </div>
  );
};

export default Pet;
