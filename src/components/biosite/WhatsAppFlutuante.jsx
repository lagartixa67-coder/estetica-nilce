import { MessageCircle } from 'lucide-react';
import { buildWhatsappLink } from '@/lib/clinicaConfig';

export default function WhatsAppFlutuante({ clinica }) {
  return (
    <a
      href={buildWhatsappLink(clinica.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110"
      style={{ animation: 'pulse-ring 2s infinite' }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}