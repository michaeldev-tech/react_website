import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
