import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "antd/dist/antd.min.css";
import store from "./app/store";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);