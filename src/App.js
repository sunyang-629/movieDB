import React from 'react';
import './App.css';

import Popular from './client/components/Popular'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
        <Popular />
      </header>
    </div>
  );
}

export default App;
