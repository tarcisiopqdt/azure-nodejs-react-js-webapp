import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContextApi from './context/UserContext'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <UserContextApi>
      <Router>
        <App />
      </Router>
    </UserContextApi>
  </React.StrictMode>,
  document.getElementById('root')
);
