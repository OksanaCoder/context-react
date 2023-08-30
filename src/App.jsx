import { Component } from 'react';
import './App.css';
import CiaoSection from './components/CiaoSection';

class App extends Component { 
  render() {
    return (
      <>
        <h1>
          Hi <em>JSX!</em>
        </h1>
        <CiaoSection />
      </>
    );
  }
}

export default App;
