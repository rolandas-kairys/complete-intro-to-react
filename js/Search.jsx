import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  constructor(props) {
    super(props);


    this.state = {
      searchTerm: "this is some debug statement"
    }
  }



  render() {
    return (
      <div className="search">
        <header>
          <h1>s-video</h1>
          <input value={this.state.searchTerm} type="text" placeholder="Search" />
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