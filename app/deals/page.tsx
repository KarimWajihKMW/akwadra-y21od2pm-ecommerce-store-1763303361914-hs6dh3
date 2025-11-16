import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';

export default function DealsPage() {
  const t = useTranslations();

  const flashDeals = [
    { id: 1, name: 'Gaming Console', price: 499, salePrice: 349, discount: 30, timeLeft: '2h 15m', stock: 5 },
    { id: 2, name: 'Wireless Earbuds', price: 149, salePrice: 79, discount: 47, timeLeft: '1h 45m', stock: 12 },
    { id: 3, name: '4K TV', price: 799, salePrice: 549, discount: 31, timeLeft: '3h 30m', stock: 3 },
    { id: 4, name: 'Robot Vacuum', price: 399, salePrice: 249, discount: 38, timeLeft: '5h 00m', stock: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 animate-pulse-slow">
            ⚡ {t('home.flashDeals')} ⚡
          </h1>
          <p className="text-2xl text-gray-600">
            Limited time offers - grab them before they&apos;re gone!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{deal.name}</h3>
                  <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    -{deal.discount}% OFF
                  </span>
                </div>
                <div className="bg-white text-primary px-4 py-2 rounded-lg font-bold">
                  ⏰ {deal.timeLeft}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90">Regular Price</p>
                  <p className="text-xl line-through opacity-75">${deal.price}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Flash Price</p>
                  <p className="text-4xl font-bold">${deal.salePrice}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Only {deal.stock} left!</span>
                  <span className="text-sm font-bold">
                    Save ${deal.price - deal.salePrice}
                  </span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full transition-all"
                    style={{ width: `${100 - (deal.stock / 20) * 100}%` }}
                  />
                </div>
              </div>

              <button className="w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
                {t('product.buyNow')} 🔥
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            New deals every hour! Check back soon for more amazing offers.
          </p>
          <button className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition">
            Notify Me of New Deals
          </button>
        </div>
      </div>
    </div>
  );
}
