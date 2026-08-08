import { Instagram as InstagramIcon, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function InstagramSection({ clinica }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-bio">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-verde to-brand-verde/90 px-6 py-14 lg:px-16 lg:py-20 text-center">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 mx-auto max-w-xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-6 ring-1 ring-white/20">
                <InstagramIcon className="h-8 w-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white text-balance">
                Acompanhe no Instagram
              </h2>
              <p className="mt-4 text-lg font-body text-white/80">
                Fique por dentro dos nossos tratamentos, resultados e novidades.
              </p>
              <p className="mt-2 font-heading text-brand-dourado">{clinica.instagram}</p>
              <a
                href={clinica.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-heading font-medium text-brand-verde shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver Instagram
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}