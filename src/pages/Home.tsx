import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const bizIcons = ['🍽️', '📊', '🤝', '📈', '🌐', '🚢'];

const advIcons = ['👥', '🤝', '⚡', '🌍'];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
            {t('home.heroTitle')}
          </h1>
          <p className="text-gold-light text-lg md:text-xl mb-6">
            {t('home.heroSubtitle')}
          </p>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-base leading-relaxed">
            {t('home.heroDesc')}
          </p>
          <Link
            to="/business"
            className="inline-block bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-3 rounded transition-colors"
          >
            {t('home.heroBtn')}
          </Link>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
              {t('home.businessTitle')}
            </h2>
            <p className="text-gray-500">{t('home.businessSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Link
                key={n}
                to="/business"
                className="group p-6 bg-warm-light rounded-lg border border-gray-100 hover:border-gold hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{bizIcons[n - 1]}</div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-gold-dark transition-colors">
                  {t(`home.biz${n}_title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`home.biz${n}_desc`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              {t('home.advantageTitle')}
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="text-center">
                <div className="text-4xl mb-4">{advIcons[n - 1]}</div>
                <h3 className="font-serif text-lg font-bold mb-2">
                  {t(`home.adv${n}_title`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t(`home.adv${n}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            {t('contact.subtitle')}
          </h3>
          <p className="text-gray-500 mb-8">{t('contact.phone')}: {t('contact.phoneVal')}</p>
          <Link
            to="/contact"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}
