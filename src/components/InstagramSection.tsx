import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const InstagramSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Instagram embed script
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-32 md:py-44 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
          {t('instagram.subtitle')}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 font-normal">
          {t('instagram.title')}
        </h2>

        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DI0RnGFN3oE/"
            data-instgrm-version="14"
            style={{
              background: 'transparent',
              border: 0,
              margin: '0 auto',
              maxWidth: '540px',
              width: '100%',
              padding: 0,
            }}
          />
        </div>

        <a
          href="https://instagram.com/dittmann.guitars"
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
