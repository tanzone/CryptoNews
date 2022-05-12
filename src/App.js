import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
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
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <Route exact path='/cryptosPage'>
                  <CriptosPage />
                </Route>
                <Route exact path='/crypto/:coinId'>
                  <CriptoDetailsPage />
                </Route>
                <Route exact path='/cryptoExchange'>
                  <ExchangePage />
                </Route>
                <Route exact path='/cryptoNews'>
                  <NewsPage />
                </Route>
              </Switch>
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