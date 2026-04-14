import { useTranslation } from 'react-i18next';
import aboutPortrait from '@/assets/about-portrait.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="ueber" className="py-32 px-6 md:py-[50px] pt-[75px]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center py-[150px]">
        <div className="aspect-[3/4] rounded-sm overflow-hidden border border-border/50">
          <img src={aboutPortrait} alt="Portrait" className="w-full h-full object-cover" />
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
