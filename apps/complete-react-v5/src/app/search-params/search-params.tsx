import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

import './search-params.scss';

/* eslint-disable-next-line */
export interface SearchParamsProps {}

export const SearchParams = (props: SearchParamsProps) => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  console.log('search-params.tsx');
  return (
    <div className={'search-params'}>
      <form>
        <label htmlFor="location">
          Location
          <input id={'location'} type="text" value={location} placeholder={'Location'} onChange={ e => setLocation(e.target.value) }/>
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" value={ animal } onChange={  e => setAnimal(e.target.value)}>
            <option>All</option>
            { ANIMALS.map(animal => (
              <option key={ animal } value={ animal }>{ animal }</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" value={ breed } onChange={ e => setBreed(e.target.value) } disabled={ !breeds.length }>
            <option value="">All</option>
            { breeds.map(breedStr => (
              <option key={ breedStr } value={ breedStr }>{ breedStr }</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
