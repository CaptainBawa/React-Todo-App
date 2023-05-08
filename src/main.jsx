import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AppLogic from './components/AppLogic';


const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
      <AppLogic />
  </React.StrictMode>
);