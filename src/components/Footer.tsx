import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LegalModal from './LegalModal';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  const navItems = [
    { key: 'ueber', href: '#ueber' },
    { key: 'bauweise', href: '#bauweise' },
    { key: 'instrumente', href: '#instrumente' },
    { key: 'kontakt', href: '#kontakt' },
  ];

  return (
    <>
      <footer className="border-t border-border py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <p className="font-serif text-lg text-foreground mb-2">Michael Dittmann</p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Gitarrenbau</p>
              <p className="text-xs text-muted-foreground mt-4">mail@michaeldittmann.com</p>
              <p className="text-xs text-muted-foreground">+49 1788944568</p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>

            {/* Legal & Language */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {t('footer.impressum')}
              </button>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {t('footer.datenschutz')}
              </button>
              <button
                onClick={toggleLang}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors text-left mt-4"
              >
                {i18n.language === 'de' ? 'English' : 'Deutsch'}
              </button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Michael Dittmann – Gitarrenbau. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </footer>

      <LegalModal type="impressum" open={impressumOpen} onOpenChange={setImpressumOpen} />
      <LegalModal type="datenschutz" open={datenschutzOpen} onOpenChange={setDatenschutzOpen} />
    </>
  );
};

export default Footer;
