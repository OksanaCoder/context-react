import React from 'react';
import './App.css';

const List = ({title, children}) => {
  return (
    <article>
      <h3 title={title}>List {title}</h3>
      <ul>{children}</ul>
    </article>
  );
};

function App() {
  return (
    <>
      <List title="first">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </List>
      <List title="second">
        <li>10</li>
        <li>20</li>
      </List>
    </>
  );
}

export default App;
