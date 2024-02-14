import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* functionality Wraping the App component with the BrowserRouter to get the
    routing functionality */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
