import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';



ReactDOM.render(
  <React.StrictMode>
  <Favicon url='https://i.ibb.co/SyC8dQ2/logo-Rock-Nyl.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
