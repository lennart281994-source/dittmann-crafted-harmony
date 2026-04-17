import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';

const SiteFooter = () => {
  const { t, i18n } = useTranslation();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');

  const navItems = [
    { key: 'instrumente', to: '/instrumente' },
    { key: 'philosophie', to: '/philosophie' },
    { key: 'bauweise', to: '/werkstatt' },
    { key: 'ueber', to: '/ueber' },
    { key: 'kontakt', to: '/kontakt' },
  ];

  return (
    <>
      <footer className="border-t border-border/60 px-6 md:px-12 pt-20 pb-12 mt-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5">
              <p className="font-serif text-2xl text-foreground">Michael Dittmann</p>
              <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mt-2">
                {t('home.subtitle')}
              </p>
              <div className="mt-8 space-y-1 text-sm text-muted-foreground">
                <p>mail@michaeldittmann.com</p>
                <p>+49 178 894 4568</p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>

            <div className="md:col-span-3 flex flex-col gap-3">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {t('footer.impressum')}
              </button>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                {t('footer.datenschutz')}
              </button>
              <button
                onClick={toggleLang}
                className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors text-left mt-3"
              >
                {i18n.language === 'de' ? 'English' : 'Deutsch'}
              </button>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-border/40">
            <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground/60">
              © {new Date().getFullYear()} Michael Dittmann
            </p>
          </div>
        </div>
      </footer>

      <LegalModal type="impressum" open={impressumOpen} onOpenChange={setImpressumOpen} />
      <LegalModal type="datenschutz" open={datenschutzOpen} onOpenChange={setDatenschutzOpen} />
    </>
  );
};

export default SiteFooter;
