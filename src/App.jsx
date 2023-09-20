import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserContext, ThemeContext, LangContext } from "./contexts";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";

import { THEMES, LANG } from "./constants";

const App = () => {
  const [user, setUser] = useState({
    user: {
      id: 1,
      firstName: "Brad",
      lastName: "Pitt",
      isSelect: false,
      avatar: "https://cdn-icons-png.flaticon.com/128/3641/3641963.png"
    }
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [lang, setLang] = useState(LANG.ENG);

  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  const selectorUser = (id) => {
    setUser({
      ...user,
      isSelect: !user.isSelect
    });
  };
  const changeLang = (lang) => {
    setLang(lang === LANG.ENG ? LANG.UA : LANG.ENG);
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <UserContext.Provider value={{ user, selectorUser: selectorUser }}>
          <BrowserRouter>
            <Header />
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
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
};

export default App;
