import React from 'react';
import preload from '../data.json';

const Search = () => {
  return (
    <div className="search">
      <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
    </div>
  );
}

export default Search;