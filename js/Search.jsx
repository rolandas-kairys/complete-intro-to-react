import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => {
  return (
    <div className="search">
      {preload.shows.map((show, key) =>
        <ShowCard key={key} show={show} />
      )}
    </div>
  );
}

export default Search;