import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../View/Login/LoginForm';
import Home from '../View/Home/Home'; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};


