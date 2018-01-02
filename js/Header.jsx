// @flow


import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: { showSearch?: boolean }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = <h1>utilSpace</h1>;
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }


  return (
    <header>
      <h1>
        <Link to="/">
          s-video
      </Link>
      </h1>
      {utilSpace}
    </header>
  );
}

Header.defaultProps = {
  showSearch: false
};


export default Header;