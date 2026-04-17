import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="px-6 md:px-12 pt-40 md:pt-56 pb-16">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-12">
          {t('nav.kontakt')}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.08] max-w-2xl mb-24 md:mb-32">
          {t('contact.lead')}
        </h1>

        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5 space-y-12">
            <div>
              <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-3">
                {t('contact.email')}
              </p>
              <a
                href="mailto:mail@michaeldittmann.com"
                className="font-serif text-xl text-foreground hover:text-accent transition-colors"
              >
                mail@michaeldittmann.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-3">
                {t('contact.phone')}
              </p>
              <a
                href="tel:+491788944568"
                className="font-serif text-xl text-foreground hover:text-accent transition-colors"
              >
                +49 178 894 4568
              </a>
            </div>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs pt-8 border-t border-border/60">
              {t('contact.studioNote')}
            </p>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-3 block">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-3 block">
                  {t('contact.emailField')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest-plus uppercase text-muted-foreground mb-3 block">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-border py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-[10px] tracking-widest-plus uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                {t('contact.send')} —
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
