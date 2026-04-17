import { useTranslation } from 'react-i18next';

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 pt-40 md:pt-56 pb-32">
      <div className="max-w-2xl mx-auto">
        <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-12 text-center">
          {t('nav.philosophie')}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground text-center leading-[1.08] mb-24 md:mb-32">
          {t('philosophy.lead')}
        </h1>

        <div className="space-y-12 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-foreground/85 leading-relaxed">
            {t('philosophy.p1')}
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            {t('philosophy.p2')}
          </p>
          <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed max-w-xl mx-auto">
            {t('philosophy.p3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
