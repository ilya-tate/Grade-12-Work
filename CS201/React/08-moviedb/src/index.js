import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { MovieProvider } from './util/context';

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
