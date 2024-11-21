import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';

// Components
import LoginForm from './Auth/Login';
import Signup from './Auth/Signup';


function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App