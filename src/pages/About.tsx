import { useTranslation } from 'react-i18next';
import aboutPortrait from '@/assets/about-portrait.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 pt-40 md:pt-48 pb-32">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-12">
          {t('nav.ueber')}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.08] max-w-2xl mb-24 md:mb-32">
          {t('about.lead')}
        </h1>

        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
              <img
                src={aboutPortrait}
                alt={t('about.title')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pt-8">
            <div className="space-y-8 max-w-md">
              <p className="font-serif italic text-xl md:text-2xl text-foreground/85 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('about.p2')}
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                {t('about.p3')}
              </p>
              <p className="font-serif text-lg text-foreground/70 pt-8 italic">
                — {t('about.signature')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
