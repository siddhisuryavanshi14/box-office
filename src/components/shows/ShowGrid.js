import React from 'react';
import IMAGE_NOT_FOND from '../../images/not-found.png';
import ShowCard from './ShowCard';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOND}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
