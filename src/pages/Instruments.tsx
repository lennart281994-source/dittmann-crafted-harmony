import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import guitar1Img from '@/assets/guitar1.png';

type Guitar = {
  key: string;
  images: string[];
  hasSpecs: boolean;
};

const PageHeader = ({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) => (
  <div className="px-6 md:px-12 pt-40 md:pt-48 pb-20 md:pb-32">
    <div className="max-w-[1400px] mx-auto">
      <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-8">
        {eyebrow}
      </p>
      <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl">
        {title}
      </h1>
      {lead && (
        <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mt-10 max-w-2xl">
          {lead}
        </p>
      )}
    </div>
  </div>
);

const Carousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  if (!images.length) return null;
  return (
    <div className="relative group aspect-[4/5] bg-secondary/40 overflow-hidden">
      <img
        src={images[i]}
        alt={`${alt} ${i + 1}`}
        className="w-full h-full object-cover transition-opacity duration-700"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setI((p) => (p - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}
    </div>
  );
};

const Placeholder = () => (
  <div className="aspect-[4/5] bg-secondary/40 border border-border/40 flex items-center justify-center">
    <div className="w-12 h-32 border border-muted-foreground/20 rounded-full" />
  </div>
);

const Instruments = () => {
  const { t } = useTranslation();

  const guitars: Guitar[] = [
    { key: 'guitar1', images: [guitar1Img], hasSpecs: true },
    { key: 'guitar2', images: [], hasSpecs: false },
    { key: 'guitar3', images: [], hasSpecs: false },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t('nav.instrumente')}
        title={t('guitars.title')}
        lead={t('guitars.lead')}
      />

      <div className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto space-y-40 md:space-y-56">
          {guitars.map((g, i) => {
            const desc = t(`guitars.${g.key}.description`, { defaultValue: '' });
            const blurb = t(`guitars.${g.key}.blurb`, { defaultValue: '' });
            const reverse = i % 2 === 1;

            return (
              <article
                key={g.key}
                className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                <div className={`md:col-span-7 ${reverse ? 'md:order-2' : ''}`}>
                  {g.images.length > 0 ? (
                    <Carousel images={g.images} alt={t(`guitars.${g.key}.name`)} />
                  ) : (
                    <Placeholder />
                  )}
                </div>

                <div className={`md:col-span-5 ${reverse ? 'md:order-1' : ''}`}>
                  <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                    {t(`guitars.${g.key}.name`)}
                  </h2>

                  {blurb && (
                    <p className="font-serif italic text-xl text-foreground/80 leading-relaxed mb-10">
                      {blurb}
                    </p>
                  )}

                  {!blurb && desc && (
                    <p className="text-base text-muted-foreground leading-relaxed mb-10">
                      {desc}
                    </p>
                  )}

                  {/* Specs — secondary, reduced */}
                  {g.hasSpecs && desc && (
                    <details className="group border-t border-border/60 pt-6 mb-10">
                      <summary className="cursor-pointer list-none flex items-center justify-between text-[10px] tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors">
                        <span>{t('guitars.specsLabel')}</span>
                        <span className="font-serif text-lg leading-none transition-transform duration-500 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="mt-6 text-sm text-muted-foreground/90 leading-relaxed whitespace-pre-line">
                        {desc}
                      </div>
                    </details>
                  )}

                  <Link
                    to="/kontakt"
                    className="text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    {t('guitars.inquiry')} —
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instruments;
