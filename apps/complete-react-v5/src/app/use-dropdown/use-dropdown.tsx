import React, { useState } from 'react';

import './use-dropdown.scss';

/* eslint-disable-next-line */
export interface UseDropdownProps {
  label: string;
  defaultState: any[];
  options: any;
}

export const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={ id }>
      { label }
      <select
        id={ id }
        value={ state }
        disabled={ options.length === 0 }
        onChange={ e => setState(e.target.value) }>
        <option>All</option>
        { options.map(option => (
          <option key={ option } value={ option }>{ option }</option>
        ))}
      </select>
    </label>
  );

  console.log('use-dropdown.tsx', label);

  return [state, Dropdown, setState];
};

export default useDropdown;
