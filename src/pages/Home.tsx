import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import guitar1 from '@/assets/guitar1.png';
import tonewood from '@/assets/tonewood.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO — full bleed, atmospheric */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Image / future video container */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16">
          <div className="max-w-2xl fade-up">
            <p className="text-[10px] tracking-widest-plus uppercase text-foreground/70 mb-6">
              {t('home.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
              {t('home.line1')}
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-muted-foreground">
              {t('home.line2')}
            </p>
          </div>
        </div>

        {/* Quiet scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-foreground/30" />
      </section>

      {/* PHILOSOPHY TEASER */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-10">
            {t('home.philosophyLink')}
          </p>
          <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
            {t('home.philosophyTeaser')}
          </p>
          <Link
            to="/philosophie"
            className="inline-block mt-12 text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors duration-500"
          >
            {t('home.philosophyLink')} —
          </Link>
        </div>
      </section>

      {/* GUITAR TEASER */}
      <section className="px-6 md:px-12 pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground">
              {t('home.guitarsLabel')}
            </p>
            <Link
              to="/instrumente"
              className="text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('home.guitarsLink')} →
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-end">
            <div className="md:col-span-7">
              <Link to="/instrumente" className="block group overflow-hidden">
                <div className="aspect-[4/5] bg-secondary/40 overflow-hidden">
                  <img
                    src={guitar1}
                    alt={t('guitars.guitar1.name')}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </div>

            <div className="md:col-span-5 md:pb-12">
              <p className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                {t('guitars.guitar1.name')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {t('guitars.guitar1.blurb')}
              </p>
              <p className="text-base text-muted-foreground/80 italic mt-8 max-w-md">
                {t('home.guitarsTeaser')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIET WORKSHOP IMAGE BREAK */}
      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/werkstatt" className="block group">
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={tonewood}
                alt={t('construction.title')}
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
            <p className="mt-6 text-[10px] tracking-widest-plus uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              {t('construction.title')} —
            </p>
          </Link>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-10">
            {t('home.contactLabel')}
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug">
            {t('home.contactTeaser')}
          </p>
          <Link
            to="/kontakt"
            className="inline-block mt-12 text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors duration-500"
          >
            {t('home.contactLink')} —
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
