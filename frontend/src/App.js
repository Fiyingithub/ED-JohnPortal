import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';


function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App