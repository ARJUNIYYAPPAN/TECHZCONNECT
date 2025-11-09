import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const isMaintenance = process.env.REACT_APP_MAINTENANCE_MODE === 'true';

if (isMaintenance) {
  window.location.href = '/maintenance.html';
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

