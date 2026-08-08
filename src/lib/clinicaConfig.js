// Configuração padrão da clínica — usada como fallback caso o banco esteja vazio.
// Para alterar os dados em produção, edite o registro de ClinicaInfo no painel.
export const CLINICA = {
  nome: 'Estética Nilce Santos',
  whatsapp: '5516997844935',
  instagram: '@esteticanilcesantos',
  instagram_url: 'https://instagram.com/esteticanilcesantos',
  endereco: 'Rua Bahia, 2791 - Vila Xavier, Araraquara - SP',
  horario: 'Segunda a sexta das 09h às 19h, Sábado das 09h às 15h".',
  maps_embed_url: '',
  descricao_curta: 'Cuidando da sua beleza, autoestima e bem-estar.',
  foto_profissional_url: 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/57030c2a9_image.png',
};

export const buildWhatsappLink = (number = CLINICA.whatsapp, message = 'Olá! Gostaria de agendar uma avaliação.') =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const HERO_IMAGE_URL = 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/57030c2a9_image.png';
export const ABOUT_IMAGE_URL = 'https://media.base44.com/images/public/6a73dcfd84bbc1818945b4a2/e4a1390e1_generated_90aca536.png';