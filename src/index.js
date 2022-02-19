import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/style.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
