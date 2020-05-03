import React from 'react';

import './details.scss';

/* eslint-disable-next-line */
export interface DetailsProps {
  id?: number;
  path: any;
}

export interface DetailsState {
  loading: boolean;
}

class Details extends React.Component<DetailsProps, any> {
  state: any = {
    loading: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    fetch('/api/pet/' + this.props.id)
      .then(response => response.json())
      .then(pet => this.setState({
        name: pet.name,
        id: pet.id,
        location: pet.location,
        animal: pet.animal,
        breed: pet.breed,
        loading: false
      }));
  }

  render() {
    if(this.state.loading) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      const { name, id, location, animal, breed } = this.state;

      return (
        <div>
          <h1>{ name }</h1>
          <h1>{ id }</h1>
          <h1>{ location }</h1>
          <h1>{ animal }</h1>
          <h1>{ breed }</h1>
          <button>Adopt { name }</button>
        </div>
      )
    }
  }
}

export default Details;
