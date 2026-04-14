import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 md:py-44 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-20 font-normal">
          {t('process.title')}
        </h2>

        {/* Erleben */}
        <div className="mb-16">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 font-normal">
            {t('process.experience.title')}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {t('process.experience.text')}
          </p>
        </div>

        {/* Individuelle Anfertigung */}
        <div className="mb-16">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 font-normal">
            {t('process.custom.title')}
          </h3>
          <div className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-6">
            <p>{t('process.custom.p1')}</p>
            <p>
              {t('process.custom.p2')}
              <br />
              {t('process.custom.p3')}
              <br />
              {t('process.custom.p4')}
            </p>
            <p>{t('process.custom.p5')}</p>
          </div>
        </div>

        {/* Kennenlernen */}
        <div className="mb-12">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 font-normal">
            {t('process.contact.title')}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {t('process.contact.text')}
          </p>
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
