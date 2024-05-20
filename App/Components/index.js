import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginForm from './Login/LoginForm.js';

const root = createRoot(document.getElementById('login-container'));
root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);