import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

import { Layout, HomePage, CriptosPage, CriptoDetailsPage, ExchangePage, NewsPage } from "./components";


export const ThemeContext = React.createContext(null);


const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Unipr - CriptoNews</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <>
          <Layout>
            <Routes>
              <Route exact path='/' element={<HomePage />}>
              </Route>
              <Route exact path='/cryptosPage' element={<CriptosPage />}>
              </Route>
              <Route exact path='/crypto/:coinId' element={<CriptoDetailsPage />}>
              </Route>
              <Route exact path='/cryptoExchange' element={<ExchangePage />}>
              </Route>
              <Route exact path='/cryptoNews' element={<NewsPage />}>
              </Route>
            </Routes>
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App