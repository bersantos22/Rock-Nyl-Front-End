import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';


ReactDOM.render(
  <React.StrictMode>
  <Favicon url='http://cdn.icon-icons.com/icons2/663/PNG/512/vinyl-record_icon-icons.com_60174.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
