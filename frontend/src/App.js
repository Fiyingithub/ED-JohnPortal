import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {ToastProvider} from './Loaders/ToastContext';
import LandingPage from './Pages/LandingPage';



function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </ToastProvider>
  )
}

export default App