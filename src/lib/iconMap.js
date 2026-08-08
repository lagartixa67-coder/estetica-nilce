import {
  Scale, Waves, Droplet, Droplets, Sparkles, Heart, Flower2,
  RefreshCw, Circle, HandHeart, Leaf, UserCheck, Clock,
  PersonStanding, Sofa, HeartHandshake, Award,
} from 'lucide-react';

const iconMap = {
  scale: Scale,
  waves: Waves,
  droplet: Droplet,
  droplets: Droplets,
  sparkles: Sparkles,
  heart: Heart,
  flower: Flower2,
  'refresh-cw': RefreshCw,
  circle: Circle,
  'hand-heart': HandHeart,
  leaf: Leaf,
  'user-check': UserCheck,
  clock: Clock,
  'person-standing': PersonStanding,
  sofa: Sofa,
  'heart-handshake': HeartHandshake,
  award: Award,
};

export const getIcon = (name) => iconMap[name] || Sparkles;