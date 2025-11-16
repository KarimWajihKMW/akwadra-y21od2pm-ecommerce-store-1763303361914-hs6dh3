import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ProfilePage() {
  const t = useTranslations();

  const userStats = {
    points: 1250,
    orders: 15,
    groups: 8,
    saved: 350,
  };

  const recentOrders = [
    { id: 1, product: 'Smartphone', date: '2024-11-15', status: 'Delivered', price: 299 },
    { id: 2, product: 'Headphones', date: '2024-11-10', status: 'Shipped', price: 79 },
    { id: 3, product: 'Smart Watch', date: '2024-11-05', status: 'Processing', price: 159 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {t('profile.myProfile')}
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold mb-1">{userStats.points}</div>
            <div className="text-sm opacity-90">{t('profile.myPoints')}</div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-secondary-dark text-gray-900 rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">📦</div>
            <div className="text-3xl font-bold mb-1">{userStats.orders}</div>
            <div className="text-sm opacity-90">{t('profile.myOrders')}</div>
          </div>
          <div className="bg-gradient-to-br from-success to-success-dark text-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold mb-1">{userStats.groups}</div>
            <div className="text-sm opacity-90">{t('profile.myGroups')}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">💰</div>
            <div className="text-3xl font-bold mb-1">${userStats.saved}</div>
            <div className="text-sm opacity-90">Total Saved</div>
          </div>
        </div>

        {/* Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link
            href="/profile/orders"
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="text-4xl">📦</div>
            <div>
              <h3 className="font-bold">{t('profile.myOrders')}</h3>
              <p className="text-sm text-gray-600">View order history</p>
            </div>
          </Link>
          <Link
            href="/profile/groups"
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="text-4xl">👥</div>
            <div>
              <h3 className="font-bold">{t('profile.myGroups')}</h3>
              <p className="text-sm text-gray-600">Active group purchases</p>
            </div>
          </Link>
          <Link
            href="/profile/points"
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="text-4xl">⭐</div>
            <div>
              <h3 className="font-bold">{t('profile.myPoints')}</h3>
              <p className="text-sm text-gray-600">Rewards and points</p>
            </div>
          </Link>
          <Link
            href="/profile/invite"
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="text-4xl">🎁</div>
            <div>
              <h3 className="font-bold">{t('profile.inviteFriends')}</h3>
              <p className="text-sm text-gray-600">Get rewards</p>
            </div>
          </Link>
          <Link
            href="/profile/settings"
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all flex items-center space-x-4 rtl:space-x-reverse"
          >
            <div className="text-4xl">⚙️</div>
            <div>
              <h3 className="font-bold">{t('profile.settings')}</h3>
              <p className="text-sm text-gray-600">Account settings</p>
            </div>
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <div>
                  <h3 className="font-bold">{order.product}</h3>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${order.price}</p>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      order.status === 'Delivered'
                        ? 'bg-success text-white'
                        : order.status === 'Shipped'
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-gray-900'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
