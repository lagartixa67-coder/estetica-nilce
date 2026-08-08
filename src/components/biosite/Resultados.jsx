import { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import Reveal from './Reveal';

function BeforeAfterSlider({ transformacao }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      if (clientX != null) updatePos(clientX);
    };
    const onEnd = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [dragging, updatePos]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-lg shadow-brand-verde/10 ring-1 ring-brand-claro cursor-ew-resize select-none"
      onMouseDown={(e) => { setDragging(true); updatePos(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}
    >
      <img
        src={transformacao.foto_depois}
        alt="Depois do tratamento"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <img
        src={transformacao.foto_antes}
        alt="Antes do tratamento"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="absolute top-4 left-4 rounded-full bg-brand-verde/85 px-3 py-1 text-xs font-heading text-white backdrop-blur-sm">Antes</span>
      <span className="absolute top-4 right-4 rounded-full bg-brand-verde/85 px-3 py-1 text-xs font-heading text-white backdrop-blur-sm">Depois</span>
      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="h-full w-0.5 bg-white/90 shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-brand-dourado">
          <MoveHorizontal className="h-5 w-5 text-brand-verde" />
        </div>
      </div>
    </div>
  );
}

export default function Resultados({ transformacoes = [] }) {
  if (!transformacoes.length) return null;

  return (
    <section id="resultados" className="py-20 lg:py-28">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Transformações</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
            Resultados que falam por si
          </h2>
          <p className="mt-4 text-lg font-body text-muted-foreground">Arraste o controle para revelar a transformação</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {transformacoes.map((t, i) => (
            <Reveal key={t.id || i} delay={i * 0.1}>
              <div>
                <BeforeAfterSlider transformacao={t} />
                <div className="mt-4 text-center">
                  <p className="font-heading text-sm font-medium text-brand-verde">{t.titulo}</p>
                  {t.cliente_iniciais && <p className="text-xs text-muted-foreground">Cliente {t.cliente_iniciais}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}