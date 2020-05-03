import React from 'react';

import './carousel.scss';

/* eslint-disable-next-line */
export interface CarouselProps {
  photos: string[]
}

export interface CarouselState {
  photos: string[],
  active: number
}

export class Carousel extends React.Component<CarouselProps, CarouselState> {
  state = {
    photos: [],
    active: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.setState({
      photos: this.props.photos,
    });
  }

  handleIndexClick = (event: any) => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render () {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <pre><code> { JSON.stringify(photos) }</code></pre>
        <img src={ photos[active] } alt=""/>
        <div className="carousel-smaller">
          { photos.map((photo, index) => (
            <img
              key={ photo }
              src={ photo }
              onClick={ this.handleIndexClick }
              data-index={ index }
              className={ active === index ? 'active' : null }
              alt={ photo }/>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
