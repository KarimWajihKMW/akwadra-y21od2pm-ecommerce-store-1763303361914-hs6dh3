import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AdminPage() {
  const t = useTranslations();

  const stats = {
    totalOrders: 1245,
    totalProducts: 567,
    totalUsers: 8934,
    revenue: 125780,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {t('admin.dashboard')}
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📦</div>
              <span className="text-success text-sm">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.totalOrders}</div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">📱</div>
              <span className="text-success text-sm">+8%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.totalProducts}</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">👥</div>
              <span className="text-success text-sm">+15%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.totalUsers}</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">💰</div>
              <span className="text-success text-sm">+20%</span>
            </div>
            <div className="text-3xl font-bold mb-1">${stats.revenue}</div>
            <div className="text-sm text-gray-600">Revenue</div>
          </div>
        </div>

        {/* Admin Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/products"
            className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.products')}</h3>
            <p className="opacity-90">Manage products and inventory</p>
            <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </Link>

          <Link
            href="/admin/categories"
            className="bg-gradient-to-br from-secondary to-secondary-dark text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">📂</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.categories')}</h3>
            <p className="opacity-90">Organize product categories</p>
            <button className="mt-4 bg-white text-secondary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-gradient-to-br from-success to-success-dark text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.orders')}</h3>
            <p className="opacity-90">Track and manage orders</p>
            <button className="mt-4 bg-white text-success px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </Link>

          <Link
            href="/admin/users"
            className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.users')}</h3>
            <p className="opacity-90">User management</p>
            <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </Link>

          <Link
            href="/admin/analytics"
            className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.analytics')}</h3>
            <p className="opacity-90">View reports and analytics</p>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              View
            </button>
          </Link>

          <Link
            href="/admin/settings"
            className="bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-2">{t('admin.settings')}</h3>
            <p className="opacity-90">System settings</p>
            <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Configure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
