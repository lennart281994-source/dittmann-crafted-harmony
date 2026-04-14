import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  const navItems = [
    { key: 'philosophie', href: '#philosophie' },
    { key: 'ueber', href: '#ueber' },
    { key: 'bauweise', href: '#bauweise' },
    { key: 'instrumente', href: '#instrumente' },
    { key: 'kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-serif text-sm md:text-base tracking-widest uppercase text-foreground">
          Dittmann
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-xs tracking-widest uppercase transition-colors font-extrabold text-gray-500"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border border-border px-3 py-1 rounded-sm"
          >
            {i18n.language === 'de' ? 'EN' : 'DE'}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            {i18n.language === 'de' ? 'EN' : 'DE'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground">
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-px bg-foreground transition-all ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block h-px bg-foreground transition-all ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
