import { useTranslation } from 'react-i18next';
import guitar1Img from '@/assets/guitar1.png';

const GuitarsSection = () => {
  const { t } = useTranslation();

  const guitars = [
    { key: 'guitar1', img: guitar1Img },
    { key: 'guitar2', img: null },
    { key: 'guitar3', img: null },
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
                {guitar.img ? (
                  <div className="aspect-[4/5] rounded-sm overflow-hidden border border-border/30">
                    <img
                      src={guitar.img}
                      alt={t(`guitars.${guitar.key}.name`)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
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
