// @flow


import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';


const Search = (props: {
  searchTerm: string,
  shows: Array<Show>
}) => (
    <div className="search">
      <Header
        searchTerm={props.searchTerm}
        showSearch
        handleSearchTermChange={props.handleSearchTermChange}
      />
      <div>
        {props.shows
          .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase().indexOf(props.searchTerm
                .toUpperCase()) >= 0
          )
          .map((show) =>
            <ShowCard key={show.imdbID} show={show} />
          )}
      </div>
    </div>
  );


export default Search;