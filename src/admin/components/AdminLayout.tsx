import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex relative">
        <AdminSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <main className={`flex-1 p-6 lg:p-8 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-0' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout

