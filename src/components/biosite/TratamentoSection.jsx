import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import ServicoCard from './ServicoCard';
import { buildWhatsappLink } from '@/lib/clinicaConfig';

export default function TratamentoSection({ id, eyebrow, title, subtitle, services = [], ctaLabel, ctaMessage, clinica }) {
  return (
    <section id={id} className="py-12 lg:py-16">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl mb-10">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">{eyebrow}</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">{title}</h2>
          {subtitle && <p className="mt-4 text-lg font-body text-muted-foreground">{subtitle}</p>}
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.id || i} delay={(i % 3) * 0.08}>
              <ServicoCard servico={s} />
            </Reveal>
          ))}
        </div>
        {ctaLabel && (
          <Reveal className="text-center mt-14" delay={0.2}>
            <a
              href={buildWhatsappLink(clinica.whatsapp, ctaMessage || 'Olá! Gostaria de agendar uma avaliação.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-verde px-8 py-4 text-sm font-heading font-medium text-white shadow-lg shadow-brand-verde/20 transition-all hover:bg-brand-verde/90 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              {ctaLabel}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}