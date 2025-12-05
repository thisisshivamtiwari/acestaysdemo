import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import HotelDetailPage from '../pages/HotelDetailPage'
import ComingSoonPage from '../pages/ComingSoonPage'
import AdminRouter from '../admin/routes/AdminRouter'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        <Route path="/comingsoon" element={<ComingSoonPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotel/:slug" element={<HotelDetailPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
