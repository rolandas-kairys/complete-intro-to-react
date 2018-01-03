// @flow


import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';


window.Perf = Perf; // makes available on window
Perf.start();       // starts recording asa page loads



const renderApp = () => {
  render(<App />, document.getElementById('app'));
}
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}

