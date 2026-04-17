import { useTranslation } from 'react-i18next';
import tonewoodImg from '@/assets/tonewood.png';
import constructionImg from '@/assets/construction.png';
import playabilityImg from '@/assets/dd8d9831-f076-494e-b7d3-d98c2baa4076.png';

const Workshop = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'tonewood', img: tonewoodImg },
    { key: 'structure', img: constructionImg },
    { key: 'sound', img: playabilityImg },
  ];

  return (
    <>
      <section className="px-6 md:px-12 pt-40 md:pt-48 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-12">
            {t('nav.bauweise')}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.08] max-w-2xl">
            {t('construction.lead')}
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1200px] mx-auto space-y-32 md:space-y-48">
          {items.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={item.key}
                className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                <div className={`md:col-span-7 ${reverse ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                    <img
                      src={item.img}
                      alt={t(`construction.${item.key}.title`)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={`md:col-span-5 ${reverse ? 'md:order-1' : ''}`}>
                  <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    {t(`construction.${item.key}.title`)}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {t(`construction.${item.key}.text`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Workshop;
