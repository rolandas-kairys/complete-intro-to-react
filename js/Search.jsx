import React from 'react';
import preload from '../data.json';

const Search = () => {
  return (
    <div className="search">
      {preload.shows.map((show, key) => <h3 key={show.title}>{show.title}</h3>)}
    </div>
  );
}

export default Search;