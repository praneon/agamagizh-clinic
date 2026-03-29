export interface ElementData {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  color: string;
  pathId: string;
  icon: string;
}

export const ELEMENTS: ElementData[] = [
  {
    id: 'space',
    name: 'Space',
    sanskritName: 'Akasha',
    description: 'The most subtle element, representing the container for all other elements. It is associated with sound and the sense of hearing.',
    color: '#8c6bbc',
    pathId: 'path12',
    icon: 'Orbit',
  },
  {
    id: 'air',
    name: 'Air',
    sanskritName: 'Vayu',
    description: 'Represents movement, breath, and life force (Prana). It is associated with the sense of touch and the skin.',
    color: '#959595',
    pathId: 'path13',
    icon: 'Wind',
  },
  {
    id: 'fire',
    name: 'Fire',
    sanskritName: 'Agni',
    description: 'Represents transformation, heat, and light. It is responsible for digestion and metabolism, associated with the sense of sight.',
    color: '#fab245',
    pathId: 'path14',
    icon: 'Flame',
  },
  {
    id: 'water',
    name: 'Water',
    sanskritName: 'Jala',
    description: 'Represents fluidity, cohesion, and life. It governs the fluids in the body and is associated with the sense of taste.',
    color: '#41a3c2',
    pathId: 'path10',
    icon: 'Droplets',
  },
  {
    id: 'earth',
    name: 'Earth',
    sanskritName: 'Prithvi',
    description: 'Represents stability, structure, and grounding. It provides the physical body its form and is associated with the sense of smell.',
    color: '#80c661',
    pathId: 'path11',
    icon: 'Mountain',
  },
];
