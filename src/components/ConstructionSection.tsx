import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const placeholderImages = [
  '/placeholder-tonewood.jpg',
  '/placeholder-structure.jpg',
  '/placeholder-sound.jpg',
];

const ConstructionSection = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'tonewood', img: placeholderImages[0] },
    { key: 'structure', img: placeholderImages[1] },
    { key: 'sound', img: placeholderImages[2] },
  ];

  return (
    <section id="bauweise" className="py-32 md:py-44 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-20 font-normal text-center">
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
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4 font-normal">
                {t(`construction.${item.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`construction.${item.key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
