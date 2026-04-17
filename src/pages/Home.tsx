import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import guitar1 from '@/assets/guitar1.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO — full bleed, one sentence, vast quiet */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/* Replace with <video> later */}
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/85" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-32 md:pb-40 px-6 md:px-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.02] max-w-2xl fade-up">
            {t('home.line')}
          </h1>
        </div>
      </section>

      {/* Vast pause */}
      <div className="h-32 md:h-56" />

      {/* PHILOSOPHY HINT — two lines, centered */}
      <section className="px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/85 leading-relaxed whitespace-pre-line">
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

      {/* Vast pause */}
      <div className="h-40 md:h-64" />

      {/* GUITAR TEASER — single instrument, large image, one sentence */}
      <section className="px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/instrumente" className="block group">
            <div className="aspect-[5/6] md:aspect-[16/10] overflow-hidden bg-secondary/40">
              <img
                src={guitar1}
                alt={t('guitars.guitar1.name')}
                className="w-full h-full object-cover transition-transform duration-[2400ms] ease-out group-hover:scale-[1.015]"
              />
            </div>
          </Link>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-baseline">
            <p className="md:col-span-5 font-serif italic text-xl md:text-2xl text-foreground/85">
              {t('home.guitar1Tease')}
            </p>
            <div className="md:col-span-7 md:text-right">
              <Link
                to="/instrumente"
                className="text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors duration-500"
              >
                {t('home.guitarsLink')} —
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vast pause */}
      <div className="h-40 md:h-64" />

      {/* CONTACT TEASER — invitation, no button */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-foreground/85 leading-relaxed">
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
