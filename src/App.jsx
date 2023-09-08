import React from 'react';
import './App.css';


function App() {
  return (
    <>
     <button onClick={()=>{window.open('https://www.w3schools.com/')}}>open</button>
     <button onClick={()=>{window.close()}}>close</button>
     
     <button onClick={()=>{window.location.assign('https://www.w3schools.com/')}}>assign</button>
     <button onClick={()=>{window.location.reload()}}>reload</button>
     <button onClick={()=>{window.location.replace('https://www.w3schools.com/')}}>replace</button>
    </>
  );
}

export default App;
