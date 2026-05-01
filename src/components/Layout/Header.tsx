import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navItems = ['home', 'about', 'business', 'news', 'contact'] as const;

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN');
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-bold text-lg shrink-0">
            禾
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-lg leading-tight">
              {i18n.language === 'zh-CN' ? '上海鑫禾通贸易' : 'Shanghai Xinhetong'}
            </div>
            <div className="text-xs text-white/60 leading-tight">
              {i18n.language === 'zh-CN' ? 'Xinhetong Trading' : 'Trading Co., Ltd.'}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((key) => {
            const path = key === 'home' ? '/' : `/${key}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={key}
                to={path}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/15 text-gold-light'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm border border-white/30 rounded px-2 py-1 hover:bg-white/10 transition-colors"
          >
            {t('lang.switch')}
          </button>

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="md:hidden relative group">
      <button className="p-2 hover:bg-white/10 rounded transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-1 bg-primary-light rounded-lg shadow-xl py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {navItems.map((key) => {
          const path = key === 'home' ? '/' : `/${key}`;
          const isActive = location.pathname === path;
          return (
            <Link
              key={key}
              to={path}
              className={`block px-4 py-2 text-sm ${isActive ? 'text-gold-light bg-white/10' : 'text-white/80 hover:bg-white/10'}`}
            >
              {t(`nav.${key}`)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
