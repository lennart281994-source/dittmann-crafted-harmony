import { useTranslation } from 'react-i18next';

const InstagramSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 md:py-44 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
          {t('instagram.subtitle')}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 font-normal">
          {t('instagram.title')}
        </h2>

        {/* Placeholder grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-secondary/80 rounded-sm border border-border/30 flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-full border border-muted-foreground/15" />
            </div>
          ))}
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 text-xs tracking-widest uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground transition-colors"
        >
          {t('instagram.follow')}
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
