import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl mb-4">{t('footer.company')}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('home.heroDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-2">
              {(['home', 'about', 'business', 'news', 'contact'] as const).map((key) => (
                <Link
                  key={key}
                  to={key === 'home' ? '/' : `/${key}`}
                  className="text-white/60 hover:text-gold-light transition-colors text-sm"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">{t('nav.contact')}</h4>
            <div className="text-white/60 text-sm space-y-2">
              <p>{t('contact.phone')}: {t('contact.phoneVal')}</p>
              <p>{t('contact.email')}: {t('contact.emailVal')}</p>
              <p>{t('contact.address')}: {t('contact.addressVal')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
