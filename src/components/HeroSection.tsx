import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Placeholder image background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/60 via-secondary/40 to-background" />
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[800px] border border-foreground/20 rounded-sm" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
          {t('hero.subtitle')}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-8 leading-tight">
          {t('hero.name')}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          {t('hero.statement')}
        </p>
        <a
          href="#kontakt"
          className="inline-block mt-12 text-xs tracking-widest uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground/50 transition-colors"
        >
          {t('hero.cta')}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-muted-foreground/30" />
      </div>
    </section>
  );
};

export default HeroSection;
