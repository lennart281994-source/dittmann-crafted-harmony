import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import guitar1Img from '@/assets/guitar1.png';

const GuitarImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative group">
      <div className="rounded-sm overflow-hidden border border-border/30">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? 'bg-foreground' : 'bg-foreground/30'
                }`}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const GuitarsSection = () => {
  const { t } = useTranslation();

  const guitars = [
    { key: 'guitar1', images: [guitar1Img] },
    { key: 'guitar2', images: [] },
    { key: 'guitar3', images: [] },
  ];

  return (
    <section id="instrumente" className="py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-20 font-normal text-center">
          {t('guitars.title')}
        </h2>

        <div className="space-y-32">
          {guitars.map((guitar, i) => (
            <div
              key={guitar.key}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                {guitar.images.length > 0 ? (
                  <GuitarImageCarousel
                    images={guitar.images}
                    alt={t(`guitars.${guitar.key}.name`)}
                  />
                ) : (
                  <div className="aspect-[4/5] bg-secondary/50 rounded-sm flex items-center justify-center border border-border/30">
                    <div className="text-center text-muted-foreground/30">
                      <div className="w-16 h-32 border-2 border-muted-foreground/15 rounded-full mx-auto mb-3" />
                      <p className="text-xs tracking-widest uppercase">Foto</p>
                    </div>
                  </div>
                )}
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-serif text-2xl text-foreground mb-6 font-normal">
                  {t(`guitars.${guitar.key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                  {t(`guitars.${guitar.key}.description`)}
                </p>
                <a
                  href="#kontakt"
                  className="text-xs tracking-widest uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors"
                >
                  {t('guitars.inquiry')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuitarsSection;
