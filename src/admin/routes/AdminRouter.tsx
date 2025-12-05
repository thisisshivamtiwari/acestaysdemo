import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AdminAuthProvider } from '../context/AdminAuthContext'
import AdminLayout from '../components/AdminLayout'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLogin from '../pages/AdminLogin'
import NavigationManagement from '../pages/NavigationManagement'
import ProtectedRoute from '../components/ProtectedRoute'

const AdminRouter: React.FC = () => {
  return (
    <AdminAuthProvider>
      <Routes>
        {/* Public Login Route */}
        <Route path="login" element={<AdminLogin />} />
        
        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="hotels" element={<div className="p-6"><h1 className="text-2xl font-bold">Hotels Management</h1><p className="text-gray-600 mt-2">Hotels management page coming soon...</p></div>} />
          <Route path="hotels/new" element={<div className="p-6"><h1 className="text-2xl font-bold">Add New Hotel</h1><p className="text-gray-600 mt-2">Add hotel form coming soon...</p></div>} />
          <Route path="hotels/rooms" element={<div className="p-6"><h1 className="text-2xl font-bold">Rooms Management</h1><p className="text-gray-600 mt-2">Rooms management page coming soon...</p></div>} />
          <Route path="bookings" element={<div className="p-6"><h1 className="text-2xl font-bold">Bookings</h1><p className="text-gray-600 mt-2">Bookings management page coming soon...</p></div>} />
          <Route path="users" element={<div className="p-6"><h1 className="text-2xl font-bold">Users</h1><p className="text-gray-600 mt-2">Users management page coming soon...</p></div>} />
          <Route path="payments" element={<div className="p-6"><h1 className="text-2xl font-bold">Payments</h1><p className="text-gray-600 mt-2">Payments management page coming soon...</p></div>} />
          <Route path="reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p className="text-gray-600 mt-2">Reports page coming soon...</p></div>} />
          <Route path="content" element={<div className="p-6"><h1 className="text-2xl font-bold">Content Management</h1><p className="text-gray-600 mt-2">Content management page coming soon...</p></div>} />
          <Route path="content/navigation" element={<NavigationManagement />} />
          <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600 mt-2">Settings page coming soon...</p></div>} />
          </Route>
        </Route>
      </Routes>
    </AdminAuthProvider>
  )
}

export default AdminRouter

