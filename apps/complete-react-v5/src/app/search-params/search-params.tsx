import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

import './search-params.scss';
import useDropdown from '../use-dropdown/use-dropdown';

/* eslint-disable-next-line */
export interface SearchParamsProps {}

export const SearchParams = (props: SearchParamsProps) => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

  console.log('search-params.tsx');
  return (
    <div className={'search-params'}>
      <form>
        <label htmlFor="location">
          Location
          <input id={'location'} type="text" value={location} placeholder={'Location'} onChange={ e => setLocation(e.target.value) }/>
        </label>
        <AnimalDropdown/>
        <BreedDropdown/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
