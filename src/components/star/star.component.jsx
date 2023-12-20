import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({ voteAverage, voteCount }) => {
  // Calculate the number of filled stars based on vote average
  const filledStars = Math.round(voteAverage / 2);

  // Create an array of star elements
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < filledStars ? faStar : ['far', 'star']}
      style={{ color: 'gold', marginRight: '2px' }}
    />
  ));

  return (
    <div>
      {stars} <span>({voteCount})</span>
    </div>
  );
};

export default Star;