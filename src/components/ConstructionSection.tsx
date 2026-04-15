import { useTranslation } from 'react-i18next';
import tonewoodImg from '@/assets/tonewood.png';
import constructionImg from '@/assets/construction.png';
import playabilityImg from '@/assets/playability.png';

const ConstructionSection = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'tonewood', img: tonewoodImg },
    { key: 'structure', img: constructionImg },
    { key: 'sound', img: playabilityImg },
  ];

  return (
    <section id="bauweise" className="py-32 px-6 bg-secondary/30 md:py-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-20 font-normal text-center pt-[50px]">
          {t('construction.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item) => (
            <div key={item.key} className="text-center md:text-left">
              <div className="w-full aspect-[4/3] bg-muted/50 rounded overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt={t(`construction.${item.key}.title`)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4 font-normal">
                {t(`construction.${item.key}.title`)}
              </h3>
              <div className="text-sm text-muted-foreground leading-relaxed text-left space-y-4">
                {t(`construction.${item.key}.text`).split('\n\n').map((paragraph, i) => {
                  const isBold = paragraph.startsWith('**') && paragraph.endsWith('**');
                  const text = isBold ? paragraph.slice(2, -2) : paragraph;
                  return <p key={i} className={isBold ? 'font-semibold text-foreground' : ''}>{text}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
