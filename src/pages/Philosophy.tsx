import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import aboutPortrait from '@/assets/about-portrait.jpg';

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="px-6 md:px-12 pt-40 md:pt-48 pb-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-10 text-center">
            {t('nav.philosophie')}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground text-center leading-[1.05] mb-20">
            {t('philosophy.lead')}
          </h1>

          <div className="space-y-10 text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug">
              {t('philosophy.p1')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('philosophy.p2')}
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {t('philosophy.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* Quiet divider */}
      <div className="px-6 md:px-12">
        <div className="max-w-3xl mx-auto border-t border-border/60" />
      </div>

      {/* About — personal voice */}
      <section className="px-6 md:px-12 py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-secondary/40">
              <img
                src={aboutPortrait}
                alt={t('about.title')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-8">
              {t('about.title')}
            </p>
            <div className="space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed font-serif">
              <p className="italic">{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p className="whitespace-pre-line text-muted-foreground text-base">
                {t('about.p3')}
              </p>
            </div>

            <Link
              to="/werkstatt"
              className="inline-block mt-12 text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              {t('nav.bauweise')} —
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosophy;
