import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { NavBar, HomePage, CriptosPage, CriptoDetailsPage, ExchangePage, NewsPage } from "./components";
import "./App.css";


const App = () => {
  return (
    <div className='app'>
        {/**Space dedicated for navbar */}
        <div className='navbar'>
          <NavBar />
        </div>
        {/**Space dedicated for main content */}
        <div className='main'>
          <Layout>
            <div className='routes'>
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
            </div>
          </Layout>
        </div>
        {/**Space dedicated for footer */}
        <div className='footer'>

        </div>

    </div>
  )
}

export default App