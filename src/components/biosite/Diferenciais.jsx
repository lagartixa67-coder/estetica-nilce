import Reveal from './Reveal';
import { getIcon } from '@/lib/iconMap';

export default function Diferenciais({ diferenciais = [] }) {
  if (!diferenciais.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-brand-verde text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-brand-salvia/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-dourado/5 blur-3xl pointer-events-none" />
      <div className="container-bio relative z-10">
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Por que nos escolher</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white text-balance">Nossos Diferenciais</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {diferenciais.map((d, i) => {
            const Icon = getIcon(d.icone);
            return (
              <Reveal key={d.id || i} delay={(i % 3) * 0.1}>
                <div className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-brand-dourado/30 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-dourado/15 text-brand-dourado transition-all duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-medium text-white mb-1">{d.titulo}</h3>
                    {d.descricao && <p className="text-sm text-white/70 leading-relaxed">{d.descricao}</p>}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}