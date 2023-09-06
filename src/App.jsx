import React from 'react';
import './App.css';
import Note from './components/Note';
import { COLORS } from './constants';
// const {MAIN} = COLORS;

function App() {
  return (
    <FlexContainer fd='column' jc='space-around'>
      <Note title="Pitfall" bgColor={COLORS.PITFALL}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
        </p>
      </Note>
      <Note>
        <p>
          Lorem ipsum <em>dolor sit amet consectetur adipisicing elit.</em>{' '}
          Eius, cum. Rorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius, cum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
        </p>
      </Note>
      <Note title="Deprecated" bgColor={COLORS.DEPRECATE}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum.
        </p>
      </Note>
    </FlexContainer>
  );
}

export default App;
