import { useTranslation } from 'react-i18next';

const bizIcons = ['🍽️', '📊', '🤝', '📈', '🌐', '🚢'];

export default function Business() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 text-white text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{t('business.title')}</h1>
        <p className="text-white/60">{t('business.subtitle')}</p>
      </section>

      {/* Business Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <div
                key={n}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center text-5xl">
                    {bizIcons[n - 1]}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold font-serif text-2xl font-bold">0{n}</span>
                    <h3 className="font-serif text-2xl font-bold text-primary">
                      {t(`business.biz${n}_title`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {t(`business.biz${n}_desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
