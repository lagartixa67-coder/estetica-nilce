// Dados padrão usados como fallback quando o banco está vazio.
// Após o seed do banco, os dados virão de lá — estes servem apenas de garantia.

export const defaultServicos = [
  { titulo: 'Emagrecimento e Perda de Medidas', descricao: 'Tratamentos focados na redução de medidas e contorno corporal com técnicas comprovadas.', categoria: 'corporal', icone: 'scale', ordem: 1 },
  { titulo: 'Tratamento de Celulite', descricao: 'Redução da aparência da celulite com protocolos específicos para cada tipo de pele.', categoria: 'corporal', icone: 'waves', ordem: 2 },
  { titulo: 'Tratamento de Flacidez', descricao: 'Firmeza e tonicidade para a pele através de tecnologias avançadas.', categoria: 'corporal', icone: 'droplet', ordem: 3 },
  { titulo: 'Lipedema', descricao: 'Tratamento especializado para o controle e alívio dos sintomas da lipedema.', categoria: 'corporal', icone: 'heart', ordem: 4 },
  { titulo: 'Linfedema', descricao: 'Drenagem e manejo do linfedema com técnicas terapêuticas especializadas.', categoria: 'corporal', icone: 'droplets', ordem: 5 },
  { titulo: 'Limpeza de Pele', descricao: 'Higienização profunda para uma pele renovada e saudável.', categoria: 'facial', icone: 'sparkles', ordem: 1 },
  { titulo: 'Rejuvenescimento Facial', descricao: 'Protocolos para estimular o colágeno e devolver a jovialidade à pele.', categoria: 'facial', icone: 'flower', ordem: 2 },
  { titulo: 'Peeling', descricao: 'Renovação celular para tratar manchas, textura e tom da pele.', categoria: 'facial', icone: 'refresh-cw', ordem: 3 },
  { titulo: 'Tratamento de Papada', descricao: 'Redução da papada com técnicas de tonificação e drenagem.', categoria: 'facial', icone: 'circle', ordem: 4 },
  { titulo: 'Massagem Relaxante', descricao: 'Relaxamento profundo para aliviar tensões e o estresse do dia a dia.', categoria: 'massagem', icone: 'hand-heart', ordem: 1 },
  { titulo: 'Drenagem Linfática', descricao: 'Técnica suave que estimula o sistema linfático, reduzindo retenção e inchaço.', categoria: 'massagem', icone: 'leaf', ordem: 2 },
];

export const defaultDiferenciais = [
  { titulo: 'Atendimento Personalizado', descricao: 'Cada tratamento é único, pensado para você.', icone: 'user-check', ordem: 1 },
  { titulo: 'Sessões Completas', descricao: '1h30 a 2h de duração por sessão.', icone: 'clock', ordem: 2 },
  { titulo: 'Tratamento do Corpo Inteiro', descricao: 'Abordagem completa, da cabeça aos pés.', icone: 'person-standing', ordem: 3 },
  { titulo: 'Ambiente Confortável', descricao: 'Espaço acolhedor e pensado para o seu bem-estar.', icone: 'sofa', ordem: 4 },
  { titulo: 'Atendimento Humanizado', descricao: 'Cuidado genuíno em cada detalhe.', icone: 'heart-handshake', ordem: 5 },
  { titulo: 'Protocolos Exclusivos', descricao: 'Técnicas próprias desenvolvidas com experiência.', icone: 'award', ordem: 6 },
];

export const defaultDepoimentos = [
  { nome: 'Mariana Silva', comentario: 'Atendimento maravilhoso! A Nilce é muito atenciosa e profissional. Os resultados superaram minhas expectativas.', avaliacao: 5, instagram_url: 'https://instagram.com' },
  { nome: 'Patricia Costa', comentario: 'Depois da drenagem linfática me senti renovada. Ambiente limpo, confortável e acolhedor. Recomendo demais!', avaliacao: 5, instagram_url: 'https://instagram.com' },
  { nome: 'Juliana Ferreira', comentario: 'Tratamento de celulite com resultados reais. A Nilce entende profundamente do que faz. Sou cliente fiel!', avaliacao: 5, instagram_url: 'https://instagram.com' },
  { nome: 'Camila Rodrigues', comentario: 'Sessões completas e cuidadosas. Saio sempre relaxada e com a pele incrível. Profissional de verdade.', avaliacao: 5, instagram_url: 'https://instagram.com' },
];

export const defaultVideos = [
  { titulo: 'Drenagem Corporal', descricao: 'Veja nossa técnica em ação', thumbnail_url: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/da7d73492_generated_0f716c50.png', video_url: '', ordem: 1 },
  { titulo: 'Massagem Relaxante', descricao: 'Momento de puro bem-estar', thumbnail_url: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/e12d0cc0f_generated_5bbbdbf0.png', video_url: '', ordem: 2 },
];

export const defaultTransformacoes = [
  { titulo: 'Tratamento de Celulite', foto_antes: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/ba2467c9c_generated_ca10bfd5.png', foto_depois: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/33ac9ad31_generated_2db90e9a.png', cliente_iniciais: 'M.S.' },
  { titulo: 'Rejuvenescimento Facial', foto_antes: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/9b37e6117_generated_cef1128b.png', foto_depois: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/908d62d98_generated_b0a9b376.png', cliente_iniciais: 'P.C.' },
];