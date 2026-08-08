import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/clinicaConfig';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar({ clinica }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_20px_rgba(47,93,80,0.08)]' : 'bg-transparent'}`}>
      <nav className="container-bio flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-heading text-base sm:text-lg font-medium tracking-tight text-brand-verde flex items-center gap-1.5">
          <span className="text-brand-dourado text-xl leading-none">•</span>
          Estética Nilce Santos
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-heading text-brand-verde/70 hover:text-brand-verde transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={buildWhatsappLink(clinica.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-verde px-5 py-2.5 text-sm font-heading font-medium text-white shadow-sm transition-all hover:bg-brand-verde/90 hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar
          </a>
        </div>
        <button className="md:hidden text-brand-verde p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-brand-claro">
          <div className="container-bio py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-heading text-brand-verde/80 py-2.5 hover:text-brand-verde transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href={buildWhatsappLink(clinica.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-verde px-5 py-3 text-sm font-heading font-medium text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}