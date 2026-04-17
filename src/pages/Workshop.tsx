import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import tonewoodImg from '@/assets/tonewood.png';
import constructionImg from '@/assets/construction.png';
import playabilityImg from '@/assets/dd8d9831-f076-494e-b7d3-d98c2baa4076.png';

const renderText = (text: string) =>
  text.split('\n\n').map((para, i) => {
    const isBold = para.startsWith('**') && para.endsWith('**');
    const clean = isBold ? para.slice(2, -2) : para;
    return (
      <p
        key={i}
        className={isBold ? 'font-serif italic text-foreground text-lg' : ''}
      >
        {clean}
      </p>
    );
  });

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
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-8">
            {t('nav.bauweise')}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[1.05] max-w-3xl">
            {t('construction.title')}
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-muted-foreground mt-10 max-w-2xl">
            {t('construction.lead')}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto space-y-32 md:space-y-44">
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
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                    {t(`construction.${item.key}.title`)}
                  </h2>
                  <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                    {renderText(t(`construction.${item.key}.text`))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process — calm, structured */}
      <section className="px-6 md:px-12 py-32 md:py-44 mt-16 border-t border-border/60">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-10 text-center">
            {t('process.title')}
          </p>

          <div className="space-y-20">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {t('process.experience.title')}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('process.experience.text')}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {t('process.custom.title')}
              </h3>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>{t('process.custom.p1')}</p>
                <p>{t('process.custom.p2')}</p>
                <p>{t('process.custom.p3')}</p>
                <p>{t('process.custom.p4')}</p>
                <p className="italic font-serif text-foreground/80">
                  {t('process.custom.p5')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/kontakt"
              className="text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              {t('process.cta')} —
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshop;
