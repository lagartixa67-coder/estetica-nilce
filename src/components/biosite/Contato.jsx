import { MessageCircle, Instagram as InstagramIcon, MapPin, Clock } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/clinicaConfig';
import Reveal from './Reveal';

export default function Contato({ clinica }) {
  const items = [
    { icon: MessageCircle, label: 'WhatsApp', value: clinica.whatsapp ? `+${clinica.whatsapp}` : '', href: buildWhatsappLink(clinica.whatsapp) },
    { icon: InstagramIcon, label: 'Instagram', value: clinica.instagram, href: clinica.instagram_url },
    { icon: MapPin, label: 'Endereço', value: clinica.endereco, href: null },
    { icon: Clock, label: 'Horário', value: clinica.horario, href: null },
  ].filter((i) => i.value);

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Contato</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
            Vamos conversar
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground">Entre em contato e agende sua avaliação personalizada.</p>
        </Reveal>

        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {items.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-3xl border border-brand-claro bg-white p-6 transition-all hover:shadow-lg hover:shadow-brand-verde/5 hover:border-brand-salvia/40 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-claro/60 text-brand-dourado">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-heading text-sm text-brand-verde font-medium break-all">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}