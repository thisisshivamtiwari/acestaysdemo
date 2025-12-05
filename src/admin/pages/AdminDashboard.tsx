import React from 'react'
import {
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiUsers,
  FiTrendingUp,
  FiAlertCircle
} from 'react-icons/fi'

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      id: 'bookings',
      label: 'Total Bookings',
      value: '1,234',
      change: '+12.5%',
      trend: 'up',
      icon: <FiCalendar className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'revenue',
      label: 'Total Revenue',
      value: '₹12,45,678',
      change: '+8.2%',
      trend: 'up',
      icon: <FiDollarSign className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'hotels',
      label: 'Active Hotels',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: <FiMapPin className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'users',
      label: 'Total Users',
      value: '5,678',
      change: '+15.3%',
      trend: 'up',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ]

  const recentBookings = [
    {
      id: '1',
      guest: 'John Doe',
      hotel: 'Bloom Hotel - Karol Bagh',
      checkIn: '2025-01-15',
      checkOut: '2025-01-17',
      amount: '₹7,560',
      status: 'confirmed'
    },
    {
      id: '2',
      guest: 'Jane Smith',
      hotel: 'AceStayz Noida',
      checkIn: '2025-01-16',
      checkOut: '2025-01-18',
      amount: '₹9,800',
      status: 'pending'
    },
    {
      id: '3',
      guest: 'Mike Johnson',
      hotel: 'AceStayz Gurugram',
      checkIn: '2025-01-20',
      checkOut: '2025-01-22',
      amount: '₹12,400',
      status: 'confirmed'
    }
  ]

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800'
    }
    return styles[status as keyof typeof styles] || styles.pending
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === 'up' ? (
                    <FiTrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <FiAlertCircle className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">vs last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
          <p className="text-sm text-gray-600 mt-1">Latest booking requests and confirmations</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hotel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-in
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.guest}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.hotel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.checkIn}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.checkOut}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{booking.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-gray-200">
          <a
            href="/admin/bookings"
            className="text-sm font-medium"
            style={{ color: '#4B9CD3' }}
          >
            View all bookings →
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

