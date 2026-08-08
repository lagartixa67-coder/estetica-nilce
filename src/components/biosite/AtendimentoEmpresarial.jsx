import { Building2, ArrowRight } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/clinicaConfig';
import Reveal from './Reveal';

export default function AtendimentoEmpresarial({ clinica }) {
  return (
    <section id="empresarial" className="py-20 lg:py-28">
      <div className="container-bio">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-bege via-white to-brand-claro/40 px-6 py-14 lg:px-16 lg:py-20 ring-1 ring-brand-claro">
            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-brand-salvia/15 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 mb-6 ring-1 ring-brand-claro">
                <Building2 className="h-4 w-4 text-brand-dourado" />
                <span className="text-xs font-heading uppercase tracking-[0.15em] text-brand-verde font-medium">Atendimento Empresarial</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
                Massagem Quick para Empresas
              </h2>
              <p className="mt-5 text-lg font-body text-muted-foreground leading-relaxed">
                Levamos bem-estar ao seu ambiente corporativo com sessões de massagem na cadeira Quick, oferecendo relaxamento e qualidade de vida para seus colaboradores.
              </p>
              <a
                href={buildWhatsappLink(clinica.whatsapp, 'Olá! Gostaria de solicitar um orçamento para massagem empresarial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-brand-verde px-8 py-4 text-sm font-heading font-medium text-white shadow-lg shadow-brand-verde/20 transition-all hover:bg-brand-verde/90 hover:-translate-y-0.5"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}