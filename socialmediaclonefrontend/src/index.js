import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './Controller';
import './Views/Common/Common.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Controller />
  </React.StrictMode>
);
