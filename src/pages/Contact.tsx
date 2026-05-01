import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 text-white text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">{t('contact.title')}</h1>
        <p className="text-white/60">{t('contact.subtitle')}</p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info Cards */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-warm-light p-6 rounded-lg flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact.phone')}</h3>
                  <p className="text-gray-600">{t('contact.phoneVal')}</p>
                </div>
              </div>
              <div className="bg-warm-light p-6 rounded-lg flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact.email')}</h3>
                  <p className="text-gray-600">{t('contact.emailVal')}</p>
                </div>
              </div>
              <div className="bg-warm-light p-6 rounded-lg flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact.address')}</h3>
                  <p className="text-gray-600">{t('contact.addressVal')}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-warm-light p-8 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">{t('contact.formTitle')}</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center text-lg">
                    {t('contact.formSuccess')}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">{t('contact.formName')}</label>
                        <input type="text" className="w-full border border-gray-200 rounded px-4 py-2.5 bg-white focus:outline-none focus:border-primary-light transition-colors" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">{t('contact.formPhone')}</label>
                        <input type="tel" className="w-full border border-gray-200 rounded px-4 py-2.5 bg-white focus:outline-none focus:border-primary-light transition-colors" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">{t('contact.formEmail')}</label>
                      <input type="email" className="w-full border border-gray-200 rounded px-4 py-2.5 bg-white focus:outline-none focus:border-primary-light transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">{t('contact.formMsg')}</label>
                      <textarea rows={5} className="w-full border border-gray-200 rounded px-4 py-2.5 bg-white focus:outline-none focus:border-primary-light transition-colors resize-none" required />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded transition-colors"
                    >
                      {t('contact.formSubmit')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
