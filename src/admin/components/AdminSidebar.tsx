import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FiHome,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiFileText,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi'

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  path: string
  children?: MenuItem[]
}

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])
  const location = useLocation()
  const navigate = useNavigate()

  // Close sidebar on mobile when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      // Close sidebar on mobile devices when navigating
      if (window.innerWidth < 1024) {
        onClose()
      }
    }
    
    handleRouteChange()
  }, [location.pathname, onClose])

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FiHome className="w-5 h-5" />,
      path: '/admin'
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: <FiMapPin className="w-5 h-5" />,
      path: '/admin/hotels',
      children: [
        { id: 'all-hotels', label: 'All Hotels', icon: <FiMapPin className="w-4 h-4" />, path: '/admin/hotels' },
        { id: 'add-hotel', label: 'Add Hotel', icon: <FiMapPin className="w-4 h-4" />, path: '/admin/hotels/new' },
        { id: 'rooms', label: 'Rooms', icon: <FiHome className="w-4 h-4" />, path: '/admin/hotels/rooms' }
      ]
    },
    {
      id: 'bookings',
      label: 'Bookings',
      icon: <FiCalendar className="w-5 h-5" />,
      path: '/admin/bookings'
    },
    {
      id: 'users',
      label: 'Users',
      icon: <FiUsers className="w-5 h-5" />,
      path: '/admin/users'
    },
    {
      id: 'payments',
      label: 'Payments',
      icon: <FiDollarSign className="w-5 h-5" />,
      path: '/admin/payments'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5" />,
      path: '/admin/reports'
    },
    {
      id: 'content',
      label: 'Content',
      icon: <FiFileText className="w-5 h-5" />,
      path: '/admin/content',
      children: [
        { id: 'navigation', label: 'Navigation Management', icon: <FiFileText className="w-4 h-4" />, path: '/admin/content/navigation' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <FiSettings className="w-5 h-5" />,
      path: '/admin/settings'
    }
  ]

  const handleToggleMenu = (menuId: string) => {
    setExpandedMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    )
  }

  const handleMenuItemClick = (path: string) => {
    navigate(path)
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      onClose()
    }
  }

  const isMenuExpanded = (menuId: string) => expandedMenus.includes(menuId)

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-16 left-0 z-50
          w-64 bg-white border-r border-gray-200
          min-h-[calc(100vh-4rem)]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:block
        `}
      >
        <nav className="overflow-y-auto p-4 h-full">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.id}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleToggleMenu(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isMenuExpanded(item.id)
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        <span className={isMenuExpanded(item.id) ? 'text-blue-600' : 'text-gray-600'}>
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {isMenuExpanded(item.id) ? (
                        <FiChevronDown className="w-4 h-4" />
                      ) : (
                        <FiChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {isMenuExpanded(item.id) && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {item.children.map(child => (
                          <li key={child.id}>
                            <button
                              onClick={() => handleMenuItemClick(child.path)}
                              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                                location.pathname === child.path
                                  ? 'bg-blue-50 text-blue-700 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              <span>{child.icon}</span>
                              <span>{child.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleMenuItemClick(item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={location.pathname === item.path ? 'text-blue-600' : 'text-gray-600'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default AdminSidebar

