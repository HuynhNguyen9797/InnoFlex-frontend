import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  { AuthenProvider }  from './context/AuthenContext.tsx';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <AuthenProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthenProvider>
  </React.StrictMode>
);
