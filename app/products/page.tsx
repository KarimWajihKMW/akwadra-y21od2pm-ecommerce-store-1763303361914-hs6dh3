import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ProductsPage() {
  const t = useTranslations();

  const products = [
    { id: 1, name: 'Product 1', price: 99, groupPrice: 79, image: '📱' },
    { id: 2, name: 'Product 2', price: 149, groupPrice: 119, image: '💻' },
    { id: 3, name: 'Product 3', price: 79, groupPrice: 59, image: '🎧' },
    { id: 4, name: 'Product 4', price: 199, groupPrice: 159, image: '📷' },
    { id: 5, name: 'Product 5', price: 89, groupPrice: 69, image: '⌚' },
    { id: 6, name: 'Product 6', price: 299, groupPrice: 249, image: '🎮' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {t('nav.products')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">{t('product.price')}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('product.groupPrice')}</p>
                  <p className="text-2xl font-bold text-primary">
                    ${product.groupPrice}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition">
                  {t('product.buyNow')}
                </button>
                <button className="w-full bg-secondary text-gray-900 font-semibold py-2 rounded-lg hover:bg-secondary-dark transition">
                  {t('product.startGroup')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
