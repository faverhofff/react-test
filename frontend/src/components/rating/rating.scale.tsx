import { Component } from 'react';
import './rating.scale.css'

interface RatingScaleProps {
    maxRating: number;
    rating: number;
    index?: number;
}

class RatinScale extends Component<RatingScaleProps> {
  
  /**
   * 
   * @returns 
   */
  render() {
    const {maxRating, rating, index} = this.props;

    return (
        <div key={index} className={'ratings'}>
            {Array.from(Array(maxRating)
                  .keys())
                  .map((_index) => (
                    <i className={_index <= rating ? 'fa fa-star rating-color' : 'fa fa-star'}></i>
                  ))
            }
        </div>
      );
  }
}

export default RatinScale;