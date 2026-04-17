import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link, useLocation } from 'react-router-dom';

const SiteHeader = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');

  const navItems = [
    { key: 'instrumente', to: '/instrumente' },
    { key: 'philosophie', to: '/philosophie' },
    { key: 'bauweise', to: '/werkstatt' },
    { key: 'kontakt', to: '/kontakt' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[10px] tracking-widest-plus uppercase transition-colors duration-500 ${
      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-background/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-serif text-lg md:text-xl text-foreground tracking-tight">
            Michael Dittmann
          </span>
          <span className="text-[9px] tracking-widest-plus uppercase text-muted-foreground mt-1">
            {t('home.subtitle')}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.to} className={linkClass} end>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
          <button
            onClick={toggleLang}
            className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            {i18n.language === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-5">
          <button
            onClick={toggleLang}
            className="text-[10px] tracking-widest-plus uppercase text-muted-foreground"
          >
            {i18n.language === 'de' ? 'EN' : 'DE'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground p-1"
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-px bg-foreground transition-all duration-500 ${
                  menuOpen ? 'rotate-45 translate-y-[3px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-foreground transition-all duration-500 ${
                  menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out bg-background/95 backdrop-blur-md ${
          menuOpen ? 'max-h-96 border-t border-border/50' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-8 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `font-serif text-2xl ${isActive ? 'text-foreground' : 'text-muted-foreground'}`
              }
              end
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
