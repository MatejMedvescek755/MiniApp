import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  </Router>
)
