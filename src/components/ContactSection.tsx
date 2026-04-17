import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend
    console.log('Form submitted:', formData);
  };

  return (
    <section id="kontakt" className="py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 font-normal">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-muted-foreground">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{t('contact.email')}</p>
              <p className="text-foreground text-sm">mail@michaeldittmann.com</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{t('contact.phone')}</p>
              <p className="text-foreground text-sm">+49 1788944568</p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary">
                {t('contact.appointment')}
              </p>
            </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                {t('contact.name')}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                {t('contact.emailField')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                {t('contact.message')}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="text-xs tracking-widest uppercase border border-foreground/20 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
            >
              {t('contact.send')}
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
