import { useState } from 'react';
import { Play } from 'lucide-react';
import Reveal from './Reveal';
import VideoModal from './VideoModal';

export default function Videos({ videos = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-brand-bege">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="h-px w-8 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Galeria</span>
            <span className="h-px w-8 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
            Conheça um pouco do nosso trabalho
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <Reveal key={v.id || i} delay={i * 0.1}>
              <button
                onClick={() => setSelected(v)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-lg shadow-brand-verde/10 ring-1 ring-brand-claro text-left"
              >
                {v.thumbnail_url ? (
                  <img
                    src={v.thumbnail_url}
                    alt={v.titulo}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-brand-claro to-brand-salvia/30 flex items-center justify-center">
                    <span className="text-brand-verde/40 font-heading text-sm">Vídeo em breve</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-verde/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                    <Play className="h-6 w-6 text-brand-verde fill-brand-verde ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-lg font-medium text-white">{v.titulo}</h3>
                  {v.descricao && <p className="text-sm text-white/80 mt-1">{v.descricao}</p>}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}