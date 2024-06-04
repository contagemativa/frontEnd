import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '../../public/css/output.css';  
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('program-container'));
root.render(
    <Router>
      <ToastContainer position="top-right"
         autoClose={2300}
         hideProgressBar={false}
         newestOnTop={true}
         closeOnClick
         limit={2}
         pauseOnFocusLoss={false}
         draggable
         pauseOnHover/>
      <App />
    </Router>

);