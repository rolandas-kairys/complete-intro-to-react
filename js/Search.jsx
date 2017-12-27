import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => {
  return (
    <div className="search">
      <div>
        {preload.shows.map((show) =>
          <ShowCard key={show.imdbID} show={show} />
        )}
      </div>
    </div>
  );
}

export default Search;