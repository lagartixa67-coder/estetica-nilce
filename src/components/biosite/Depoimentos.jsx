import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

function Avatar({ nome }) {
  const initials = nome
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-salvia/20 text-brand-verde font-heading text-lg font-medium ring-2 ring-brand-claro shrink-0">
      {initials}
    </div>
  );
}

export default function Depoimentos({ depoimentos = [] }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % depoimentos.length), [depoimentos.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + depoimentos.length) % depoimentos.length), [depoimentos.length]);

  useEffect(() => {
    if (depoimentos.length <= 1) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, depoimentos.length]);

  if (!depoimentos.length) return null;
  const current = depoimentos[index];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-brand-bege">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Depoimentos</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
            O que dizem nossas clientes
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-[2rem] bg-white p-8 lg:p-12 shadow-lg shadow-brand-verde/5 ring-1 ring-brand-claro">
              <Quote className="h-10 w-10 text-brand-dourado/40 mb-6" />
              <p className="font-body text-lg lg:text-xl text-brand-verde leading-relaxed text-balance">
                &ldquo;{current.comentario}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Avatar nome={current.nome} />
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-medium text-brand-verde">{current.nome}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < (current.avaliacao || 5) ? 'fill-brand-dourado text-brand-dourado' : 'text-brand-claro'}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
            {depoimentos.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-claro bg-white text-brand-verde transition-all hover:bg-brand-claro/40"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {depoimentos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand-verde' : 'w-2 bg-brand-claro'}`}
                      aria-label={`Ir para depoimento ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-claro bg-white text-brand-verde transition-all hover:bg-brand-claro/40"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}