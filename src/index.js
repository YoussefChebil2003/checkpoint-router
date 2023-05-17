import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watchlist from './components/hooks-checkpoint/Watchlist';
import Watched from './components/hooks-checkpoint/Watched'
import Add from './components/hooks-checkpoint/Add'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);




reportWebVitals();


