import React, { lazy } from 'react';

import './details.scss';
import Carousel from '../carousel/carousel';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ThemeContext from '../ThemeContext/ThemeContext';

const Modal = lazy(() => import('../modal/modal'));

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
    loading: true,
    photos: ['/assets/img/1.jpeg', '/assets/img/2.jpg', '/assets/img/3.jpg'],
    showModal: false
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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal})
  };

  adopt = () => {
    console.log('Adopt');
    this.toggleModal();
  };

  render() {
    if(this.state.loading) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      const { name, id, location, animal, breed, photos, showModal } = this.state;

      return (
        <div>
          <Carousel photos={ photos }/>


          <h1>{ name }</h1>
          <h1>{ id }</h1>
          <h1>{ location }</h1>
          <h1>{ animal }</h1>
          <h1>{ breed }</h1>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={ {backgroundColor: theme} } onClick={ this.toggleModal }>Adopt { name }</button>
            )}
          </ThemeContext.Consumer>
          {
            showModal ? (
              <Modal>
                <h1>Would you like to adopt { name }</h1>
                <div className="buttons">
                  <button onClick={ this.adopt }>Yes</button>
                  <button onClick={ this.toggleModal }>No, I'm a monster</button>
                </div>
              </Modal>
            ) : null
          }
        </div>
      )
    }
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
};

