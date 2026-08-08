import { getIcon } from '@/lib/iconMap';

export default function ServicoCard({ servico }) {
  const Icon = getIcon(servico.icone);
  return (
    <div className="group h-full rounded-3xl border border-brand-claro bg-white p-7 transition-all duration-500 hover:border-brand-salvia/40 hover:shadow-xl hover:shadow-brand-verde/5 hover:-translate-y-1 hover:bg-brand-bege/50">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-claro/60 text-brand-dourado transition-all duration-500 group-hover:bg-brand-salvia/20 group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-heading text-lg font-medium text-brand-verde mb-2">{servico.titulo}</h3>
      <p className="text-sm font-body text-muted-foreground leading-relaxed">{servico.descricao}</p>
    </div>
  );
}