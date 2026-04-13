import { useTranslation } from 'react-i18next';

const PhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <section id="philosophie" className="py-32 md:py-44 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 font-normal">
          {t('philosophy.title')}
        </h2>
        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>{t('philosophy.p1')}</p>
          <p>{t('philosophy.p2')}</p>
          <p>{t('philosophy.p3')}</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
