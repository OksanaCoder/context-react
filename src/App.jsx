import React from 'react';
import './App.css';
import StopWatch from './components/StopWatch';
import Ciao from './components/CiaoSection/Ciao';

function App() {
  return (
    <>
      <StopWatch />
      <Ciao name="Brad" lname="Pitt" id="23" />
    </>
  );
}

export default App;
