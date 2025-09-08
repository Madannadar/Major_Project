import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { VendorDashboard } from './pages/VendorDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VendorDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
