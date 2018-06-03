import React from 'react';
import ReactDOM from 'react-dom';
import Search! from './components/Search!';
import schema from './schema';
ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Welcome to Search!
    </div>
    <Cities />
  </div>,
  document.getElementById('main')
);
