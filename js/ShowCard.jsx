import React from 'react';

const ShowCard = ({ show }) => (
  <div key={show.title} className="show-card">
    <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </div>
);

export default ShowCard;