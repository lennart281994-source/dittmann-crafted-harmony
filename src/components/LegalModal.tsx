import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LegalModal = ({ type, open, onOpenChange }: LegalModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">
            {t(`${type}.title`)}
          </DialogTitle>
        </DialogHeader>

        {type === 'impressum' ? (
          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground">{t('impressum.info')}</p>
            <div>
              <p className="font-semibold text-foreground">{t('impressum.operatorTitle')}</p>
              <p>{t('impressum.operatorName')}</p>
              <p className="whitespace-pre-line">{t('impressum.operatorAddress')}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">{t('impressum.contactTitle')}</p>
              <p>{t('impressum.phone')}</p>
              <p>{t('impressum.emailLabel')}</p>
              <p>{t('impressum.website')}</p>
            </div>
            <p className="italic">{t('impressum.taxNote')}</p>
            <div>
              <p className="font-semibold text-foreground">{t('impressum.responsibility')}</p>
              <p className="whitespace-pre-line">{t('impressum.responsiblePerson')}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            {['overview', 'collection', 'contactForm', 'cookies', 'rights'].map((section) => (
              <div key={section}>
                <h3 className="text-foreground font-serif text-base mb-2">
                  {t(`datenschutz.${section}.title`)}
                </h3>
                <p>{t(`datenschutz.${section}.text`)}</p>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
