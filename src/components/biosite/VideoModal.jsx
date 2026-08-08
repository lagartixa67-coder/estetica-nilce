import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const isYouTube = video.video_url && video.video_url.includes('youtube');
  const embedUrl = isYouTube
    ? video.video_url.replace('watch?v=', 'embed/').split('&')[0]
    : null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-brand-verde/40"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-3xl overflow-hidden ring-2 ring-brand-dourado/40 shadow-2xl bg-black"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fechar vídeo"
          >
            <X className="h-7 w-7" />
          </button>
          {video.video_url ? (
            isYouTube ? (
              <iframe
                src={embedUrl}
                title={video.titulo}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={video.video_url} controls autoPlay className="aspect-video w-full" />
            )
          ) : (
            <div className="aspect-video w-full flex flex-col items-center justify-center bg-brand-verde text-white/60 gap-3">
              <Play className="h-12 w-12" />
              <p className="font-heading text-sm">Vídeo em breve</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}