import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/clinicaConfig';

export default function Hero({ clinica }) {
  const heroImage = clinica.foto_profissional_url || 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/d453d28b4_generated_176e8cd5.png';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-brand-bege via-white to-white pt-24 pb-12">
      {/* Organic background shapes */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-brand-claro/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-salvia/10 blur-3xl pointer-events-none" />

      <div className="container-bio relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-dourado" />
            <span className="text-xs font-heading uppercase tracking-[0.25em] text-brand-dourado font-medium">Estética & Bem-estar</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-brand-verde leading-[1.05] text-balance">
            Estética <span className="block font-normal">Nilce Santos</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-body text-muted-foreground max-w-lg leading-relaxed">
            Cuidando da sua beleza, autoestima e bem-estar através de tratamentos personalizados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsappLink(clinica.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-verde px-8 py-4 text-sm font-heading font-medium text-white shadow-lg shadow-brand-verde/20 transition-all hover:bg-brand-verde/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-dourado/60 px-8 py-4 text-sm font-heading font-medium text-brand-verde transition-all hover:border-brand-dourado hover:bg-brand-dourado/5"
            >
              Conhecer Tratamentos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -m-6 rounded-[3rem] bg-gradient-to-br from-brand-salvia/25 to-brand-dourado/10 blur-2xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-verde/20 ring-1 ring-brand-claro">
              <img
                src={heroImage}
                alt="Nilce Santos — Profissional de Estética"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-5 -left-3 sm:-left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-brand-claro flex items-center justify-center">
                <span className="text-brand-dourado text-lg">★</span>
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand-verde">Atendimento</p>
                <p className="text-xs text-muted-foreground">Personalizado</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}