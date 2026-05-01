import { useTranslation } from 'react-i18next';

const values = [1, 2, 3, 4] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 text-white text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{t('about.title')}</h1>
        <p className="text-white/60">{t('about.subtitle')}</p>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {t('about.intro')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.intro2')}
              </p>
            </div>
            <div className="md:w-1/3 bg-primary text-white p-8 rounded-lg text-center shrink-0">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-3xl mx-auto mb-4">
                禾
              </div>
              <h3 className="font-serif text-xl font-bold">{t('about.subtitle')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-warm-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-gold text-4xl mb-4">◆</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t('about.vision')}</h3>
              <p className="text-gray-600">{t('about.visionText')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-gold text-4xl mb-4">◆</div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t('about.mission')}</h3>
              <p className="text-gray-600">{t('about.missionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl font-bold text-primary mb-3">{t('about.values')}</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((n) => (
              <div key={n} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold mx-auto mb-4">
                  {n}
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {t(`about.val${n}_title`)}
                </h3>
                <p className="text-gray-500 text-sm">{t(`about.val${n}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
