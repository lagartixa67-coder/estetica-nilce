import Reveal from './Reveal';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-brand-bege">
      <div className="container-bio">
        <Reveal className="text-center mx-auto max-w-2xl">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-10 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.2em] text-brand-dourado font-medium">Sobre</span>
            <span className="h-px w-10 bg-brand-dourado" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-verde text-balance">
            Atendimento Personalizado
          </h2>
          <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
            Cada cliente recebe uma avaliação individual para encontrar o tratamento ideal, sempre buscando resultados reais, conforto e atendimento humanizado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}