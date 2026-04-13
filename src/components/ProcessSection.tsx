import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 md:py-44 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 font-normal">
          {t('process.title')}
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base mb-12">
          <p>{t('process.p1')}</p>
          <p>{t('process.p2')}</p>
          <p>{t('process.p3')}</p>
        </div>
        <a
          href="#kontakt"
          className="inline-block text-xs tracking-widest uppercase border border-foreground/20 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
        >
          {t('process.cta')}
        </a>
      </div>
    </section>
  );
};

export default ProcessSection;
