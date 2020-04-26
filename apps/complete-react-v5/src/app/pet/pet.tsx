import React from 'react';

import './pet.scss';

/* eslint-disable-next-line */
export interface PetProps {
  name: string;
  animal: string;
  breed: string;
}

export const Pet = (props: PetProps) => {
  return (
    <div>
      <h1>{ props.name }</h1>
      <h2>{ props.animal }</h2>
      <h2>{ props.breed }</h2>
    </div>
  );
};

export default Pet;
