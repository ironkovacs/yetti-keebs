import React, {useState} from 'react';
import './App.css';
import Configurator from './components/config/configurator';

import tklIso from './components/config/elements/config-defaults/tkl-iso';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Configurator/>
      </header>
    </div>
  );
}

export default App;
