import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { NavBar } from "./components";
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

        </div>
        {/**Space dedicated for footer */}
        <div className='footer'>

        </div>

    </div>
  )
}

export default App