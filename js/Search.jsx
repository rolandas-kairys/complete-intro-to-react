import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <header>
          <h1>s-video</h1>
          <input type="text" placeholder="Search" />
        </header>
        <div>
          {preload.shows.map((show) =>
            <ShowCard key={show.imdbID} show={show} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;