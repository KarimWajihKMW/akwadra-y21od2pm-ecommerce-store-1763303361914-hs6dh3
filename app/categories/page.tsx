import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function CategoriesPage() {
  const t = useTranslations();

  const categories = [
    { id: 1, name: 'Electronics', nameAr: 'إلكترونيات', icon: '📱', count: 120 },
    { id: 2, name: 'Fashion', nameAr: 'أزياء', icon: '👕', count: 250 },
    { id: 3, name: 'Home & Garden', nameAr: 'منزل وحديقة', icon: '🏠', count: 180 },
    { id: 4, name: 'Sports', nameAr: 'رياضة', icon: '⚽', count: 90 },
    { id: 5, name: 'Toys', nameAr: 'ألعاب', icon: '🧸', count: 150 },
    { id: 6, name: 'Books', nameAr: 'كتب', icon: '📚', count: 300 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          {t('nav.categories')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="bg-gradient-to-br from-primary-light to-primary rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-6xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                {category.name}
              </h3>
              <p className="text-center opacity-90">
                {category.count} {t('nav.products')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
