import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import StayDetailPage from '../pages/StayDetailPage'
import HotelDetailPage from '../pages/HotelDetailPage'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'
import AdminProtectedRoute from './AdminProtectedRoute'
import { isAdminAuthenticated } from '../utils/adminAuth'
import ScrollToTop from '../components/ScrollToTop'

const AppRouterContent: React.FC = () => {
  const location = useLocation()
  
  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/stays/:location" element={<StayDetailPage />} />
        <Route path="/stays/:location/:hotel" element={<HotelDetailPage />} />
        
        {/* Admin Routes */}
        <Route
          path="/panel/admin/login"
          element={
            isAdminAuthenticated() ? (
              <Navigate to="/panel/admin/dashboard" replace />
            ) : (
              <AdminLoginPage />
            )
          }
        />
        <Route
          path="/panel/admin"
          element={
            <Navigate
              to={isAdminAuthenticated() ? '/panel/admin/dashboard' : '/panel/admin/login'}
              replace
            />
          }
        />
        <Route
          path="/panel/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboardPage />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppRouterContent />
    </Router>
  )
}

export default AppRouter
