import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';

export default function GroupBuyingPage() {
  const t = useTranslations();

  const groups = [
    { id: 1, product: 'Smartphone', current: 3, required: 5, price: 299, groupPrice: 249, timeLeft: '2h 30m' },
    { id: 2, product: 'Headphones', current: 4, required: 5, price: 99, groupPrice: 79, timeLeft: '1h 15m' },
    { id: 3, product: 'Smart Watch', current: 2, required: 5, price: 199, groupPrice: 159, timeLeft: '4h 20m' },
    { id: 4, product: 'Laptop', current: 1, required: 5, price: 899, groupPrice: 749, timeLeft: '6h 00m' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {t('nav.groupBuying')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join active groups or start your own to save more!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-secondary"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{group.product}</h3>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⏰ {group.timeLeft}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-bold">
                    {group.current}/{group.required} members
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-success h-3 rounded-full transition-all"
                    style={{ width: `${(group.current / group.required) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Regular Price</p>
                  <p className="text-lg line-through text-gray-400">${group.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Group Price</p>
                  <p className="text-3xl font-bold text-primary">${group.groupPrice}</p>
                </div>
              </div>

              <button className="w-full bg-secondary text-gray-900 font-semibold py-3 rounded-lg hover:bg-secondary-dark transition transform hover:scale-105">
                {t('product.joinGroup')} - Save ${group.price - group.groupPrice}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Own Group</h2>
          <p className="text-lg mb-6">
            Can't find what you're looking for? Start a group and invite friends!
          </p>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
            {t('product.startGroup')}
          </button>
        </div>
      </div>
    </div>
  );
}
