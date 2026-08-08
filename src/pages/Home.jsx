import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { CLINICA } from '@/lib/clinicaConfig';
import {
  defaultServicos,
  defaultDiferenciais,
  defaultDepoimentos,
  defaultVideos,
  defaultTransformacoes,
} from '@/lib/defaultData';

import ScrollProgress from '@/components/biosite/ScrollProgress';
import Navbar from '@/components/biosite/Navbar';
import Hero from '@/components/biosite/Hero';
import Sobre from '@/components/biosite/Sobre';
import TratamentoSection from '@/components/biosite/TratamentoSection';
import Videos from '@/components/biosite/Videos';
import Resultados from '@/components/biosite/Resultados';
import Diferenciais from '@/components/biosite/Diferenciais';
import AtendimentoEmpresarial from '@/components/biosite/AtendimentoEmpresarial';
import Depoimentos from '@/components/biosite/Depoimentos';
import InstagramSection from '@/components/biosite/Instagram';
import Contato from '@/components/biosite/Contato';
import Rodape from '@/components/biosite/Rodape';
import WhatsAppFlutuante from '@/components/biosite/WhatsAppFlutuante';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      base44.entities.ClinicaInfo.list().catch(() => []),
      base44.entities.Servico.list('ordem').catch(() => []),
      base44.entities.Transformacao.list().catch(() => []),
      base44.entities.Depoimento.list().catch(() => []),
      base44.entities.Video.list('ordem').catch(() => []),
      base44.entities.Diferencial.list('ordem').catch(() => []),
    ]).then(([clinica, servicos, transformacoes, depoimentos, videos, diferenciais]) => {
      setData({
        clinica: clinica[0],
        servicos: servicos.length ? servicos : defaultServicos,
        transformacoes: transformacoes.length ? transformacoes : defaultTransformacoes,
        depoimentos: depoimentos.length ? depoimentos : defaultDepoimentos,
        videos: videos.length ? videos : defaultVideos,
        diferenciais: diferenciais.length ? diferenciais : defaultDiferenciais,
      });
    });
  }, []);

  if (!data) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-brand-bege">
        <div className="w-10 h-10 border-[3px] border-brand-claro border-t-brand-verde rounded-full animate-spin" />
      </div>
    );
  }

  const clinica = { ...CLINICA, ...(data.clinica || {}) };
  const servicosCorporais = data.servicos.filter((s) => s.categoria === 'corporal');
  const servicosFaciais = data.servicos.filter((s) => s.categoria === 'facial');
  const servicosMassagem = data.servicos.filter((s) => s.categoria === 'massagem');

  return (
    <>
      <ScrollProgress />
      <Navbar clinica={clinica} />
      <main>
        <Hero clinica={clinica} />
        <Sobre />
        <div id="tratamentos">
          <TratamentoSection
            id="corporais"
            eyebrow="Tratamentos Corporais"
            title="Corporais"
            subtitle="Resultados reais para o seu corpo"
            services={servicosCorporais}
            ctaLabel="Agendar Avaliação"
            ctaMessage="Olá! Gostaria de agendar uma avaliação para tratamentos corporais."
            clinica={clinica}
          />
          <div className="container-bio"><div className="h-px bg-black/10" /></div>
          <TratamentoSection
            id="faciais"
            eyebrow="Tratamentos Faciais"
            title="Faciais"
            subtitle="Realce a beleza do seu rosto"
            services={servicosFaciais}
            clinica={clinica}
          />
          <div className="container-bio"><div className="h-px bg-black/10" /></div>
          <TratamentoSection
            id="massagens"
            eyebrow="Massagens"
            title="Massagens"
            subtitle="Relaxamento e bem-estar"
            services={servicosMassagem}
            clinica={clinica}
          />
        </div>
        <Videos videos={data.videos} />
        <Resultados transformacoes={data.transformacoes} />
        <Diferenciais diferenciais={data.diferenciais} />
        <AtendimentoEmpresarial clinica={clinica} />
        <Depoimentos depoimentos={data.depoimentos} />
        <InstagramSection clinica={clinica} />
        <Contato clinica={clinica} />
      </main>
      <Rodape clinica={clinica} />
      <WhatsAppFlutuante clinica={clinica} />
    </>
  );
}