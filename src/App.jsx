import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import Page404 from './pages/Page404';
import LoaderPage from './pages/LoaderPage';
import UsersBlock from './pages/LoaderPage/UsersBlock';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import ProductsBlock from './pages/LoaderPage/ProductsBlock';

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
            <Route path="/users" element={<UsersPage />} />
            <Route path="/loader/" element={<LoaderPage />}>
              <Route path="users" element={<UsersBlock />} />
              <Route path="events" element={<EventsBlock />} />
              <Route path="products" element={<ProductsBlock />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <footer>&copy;2023</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
