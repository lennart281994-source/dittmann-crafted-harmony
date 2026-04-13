import { useTranslation } from 'react-i18next';

const PhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <section id="philosophie" className="py-32 text-sm mx-0 px-0 md:py-[50px] pt-[150px] pb-[150px]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p className="text-xl">{t('philosophy.p1')}</p>
          <p className="text-base">{t('philosophy.p2')}</p>
          <p className="opacity-100 text-sm">{t('philosophy.p3')}</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
