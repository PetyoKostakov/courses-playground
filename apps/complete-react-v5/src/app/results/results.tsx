import React from 'react';

import './results.scss';
import Pet, { PetProps } from '../pet/pet';

/* eslint-disable-next-line */
export interface ResultsProps {
  pets: PetProps[]
}

export const Results = (props: ResultsProps) => {
  return (
    <div>
      { !props.pets.length ? (<h1>No Pets found</h1>) : null }
      { props.pets.map(pet => (
        <Pet key={pet.name + pet.breed} name={pet.name} animal={pet.animal} breed={pet.breed}/>
      ))}
    </div>
  );
};

export default Results;
