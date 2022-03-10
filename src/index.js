import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';



ReactDOM.render(
  <React.StrictMode>
  <Favicon url='http://cdn.icon-icons.com/icons2/2024/PNG/512/vinyl_music_player_icon_123865.png' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
