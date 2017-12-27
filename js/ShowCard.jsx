import React from 'react';
import { shape, string } from 'prop-types';

const ShowCard = ({ show, key }) => (
  <div key={key} className="show-card">
    <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </div>
);

export default ShowCard;