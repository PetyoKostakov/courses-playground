import React from 'react';

import './results.scss';
import Pet, { PetProps } from '../pet/pet';
import { Link } from '@reach/router';

export interface Pet extends  PetProps {
  id: number;
}

/* eslint-disable-next-line */
export interface ResultsProps {
  pets: Pet[]
}

export const Results = (props: ResultsProps) => {
  return (
    <div>
      { !props.pets.length ? (<h1>No Pets found</h1>) : null }
      { props.pets.map(pet => (
        <Link to={`/details/${ pet.id }` } key={pet.name + pet.breed}>
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed}/>
        </Link>
      ))}
    </div>
  );
};

export default Results;
