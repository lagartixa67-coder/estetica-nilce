import { buildWhatsappLink } from '@/lib/clinicaConfig';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Rodape({ clinica }) {
  return (
    <footer className="bg-brand-verde text-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-heading text-[20rem] font-bold text-white/[0.03] leading-none select-none">NS</span>
      </div>
      <div className="container-bio relative z-10 py-14 lg:py-20">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="font-heading text-2xl font-light text-white">{clinica.nome}</h3>
            <p className="mt-3 text-sm text-white/60 font-body max-w-xs leading-relaxed">{clinica.descricao_curta}</p>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-brand-dourado mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors font-body">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-brand-dourado mb-4">Contato</h4>
            <div className="space-y-2.5">
              <a href={buildWhatsappLink(clinica.whatsapp)} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/70 hover:text-white transition-colors font-body">WhatsApp</a>
              <a href={clinica.instagram_url} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/70 hover:text-white transition-colors font-body">{clinica.instagram}</a>
              <p className="text-sm text-white/70 font-body">{clinica.endereco}</p>
              <p className="text-sm text-white/70 font-body">{clinica.horario}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 font-body">© {new Date().getFullYear()} {clinica.nome}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}