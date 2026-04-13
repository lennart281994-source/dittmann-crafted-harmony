import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="ueber" className="py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Portrait placeholder */}
        <div className="aspect-[3/4] bg-secondary/60 rounded-sm flex items-center justify-center border border-border/50">
          <div className="text-center text-muted-foreground/40">
            <div className="w-20 h-20 rounded-full border-2 border-muted-foreground/20 mx-auto mb-3" />
            <p className="text-xs tracking-widest uppercase">Portrait</p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 font-normal">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
