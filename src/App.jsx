import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavMenu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>&copy;2023</footer>
      </BrowserRouter>
    </>
  );
}

const Home = () => <h1>HOME</h1>;
const About = () => <h1>About</h1>;
const Contacts = () => <h1>Contacts</h1>;

export default App;
