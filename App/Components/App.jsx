import React from 'react';
import '../../public/css/output.css';  
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../View/Login/LoginForm';
import Home from '../View/Home/Home'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
