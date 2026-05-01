import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 text-white text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{t('news.title')}</h1>
        <p className="text-white/60">{t('news.subtitle')}</p>
      </section>

      {/* News Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📰</div>
            <p className="text-gray-400 text-lg">{t('news.empty')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
